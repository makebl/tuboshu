const Loki = require('lokijs');
const CONS = require('./constants');
const {nativeImage} = require("electron");

const dbPath = CONS.PATH.APP_PATH + "/loki.db";
const processImg = (menuArray) => menuArray.map(element => {
    if(element.img.startsWith("data:")) return element;
    if(element.img.includes("preview_default")) element.img = CONS.PREVIEW_IMG;

    const imagePath = CONS.PATH.APP_PATH +""+ element.img;
    const Img = nativeImage.createFromPath(imagePath);
    return { ...element, img: Img.toDataURL()};
});

class LokiManager {

    constructor(db) {
        this.db = db;
    }

    static async create() {
        const db = await new Promise((resolve, reject) => {
            const dbInstance = new Loki(dbPath, {
                autoload: true,
                autoloadCallback: () => {
                    resolve(dbInstance);
                },
                autosave: true,
                autosaveInterval: 5000,
            });
        });

        const manager = new LokiManager(db);
        manager.initializeCollections();
        return manager;
    }

    initializeCollections(){
        if (!this.db.getCollection('sites')) {
            const sitesCollection = this.db.addCollection('sites', { indices: ['name'], unique: ['name'] });

            if (sitesCollection.count() === 0) {
                sitesCollection.insert(CONS.SITES);
                this.db.saveDatabase();
            }
        }
    }

    // 方法无需再等待，因为初始化已完成
    getSites() {
        const sitesCollection = this.db.getCollection('sites');
        return sitesCollection.chain().find({}).simplesort('order', { desc: false }).data();
    }

    clearSites() {
        const sitesCollection = this.db.getCollection('sites');
        sitesCollection.clear();
        this.db.saveDatabase();
    }

    addSite(site) {
        const sitesCollection = this.db.getCollection('sites');
        site.order = sitesCollection.count() + 1;
        sitesCollection.insert(site);
        this.db.saveDatabase();
    }

    updateSite(site) {
        const sitesCollection = this.db.getCollection('sites');
        sitesCollection.update(site);
        this.db.saveDatabase();
    }

    batchUpdateSite(sites) {
        if(sites.length === 0) return;
        sites.forEach(site => {
            this.updateSite(site)
        });
    }

    removeSite(site) {
        const sitesCollection = this.db.getCollection('sites');
        sitesCollection.findAndRemove({name: site.name});
        this.db.saveDatabase();
    }

    getMenus() {
        let sites = this.getSites();
        if(sites.length === 0) sites = CONS.SITES;
        return {
            openMenus : processImg(sites.filter(site => site.isOpen)),
            closeMenus: processImg(sites.filter(site => !site.isOpen)),
            setMenus : processImg(CONS.SETTING)
        }
    }
}

// 使用方式
module.exports = LokiManager.create();