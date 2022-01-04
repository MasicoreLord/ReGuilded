import { ReGuildedExtensionSettings } from "../../../common/reguilded-settings";
import initializeApi from "../../addons/initializeApi";
import { RGAddonConfig } from "../../types/reguilded";
import { Addon } from "../../../common/extensions";
import WebpackManager from "../../addons/webpack";
import AddonApi from "../../addons/addonApi";
import ExtensionHandler from "./extension";
import SettingsHandler from "./settings";

/**
 * Manager that manages ReGuilded's addons
 */
export default class AddonHandler extends ExtensionHandler<Addon, RGAddonConfig> {
    initialized: string[] = [];
    webpack?: WebpackManager;
    /**
     * Manager that manages ReGuilded's addons
     * @param addonsDir Path to the directory that holds addons
     * @param settings The settings of the add-ons
     * @param settingsHandler The extension settings handler
     * @param config The preload configuration for add-ons
     */
    constructor(
        settings: ReGuildedExtensionSettings,
        settingsHandler: SettingsHandler,
        config: RGAddonConfig
    ) {
        super(settings, settingsHandler, config);
    }

    /**
     * Initiates addons for ReGuilded and addon manager
     * @param addonApi ReGuilded Addon API.
     */
    init(addonApi: AddonApi) {
        // console.log("Initiating addon manager");
        // // Initialize these here instead of getDirs()
        // this.all = [];
        // // Try-catch; this should never throw errors
        // try {
        //     // Initialize these
        //     initializeApi(addonApi);
        // } catch (e) {
        //     console.error("Failed to initialize the ReGuilded addon API!", e);
        // }
        // this.config.setWatchCallback(
        //     (metadata: Addon, loaded: boolean) =>
        //         new Promise((resolve, reject) => {
        //             // After that spaghetti junky code, get some properties of it
        //             const isEnabled = ~this.enabled.indexOf(metadata.id);
        //             // If the addon is already loaded, unload it
        //             loaded && this.unload(metadata, true);
        //             // If the addon is in the list of all loaded addons, remove it
        //             if (~this.all.indexOf(metadata))
        //                 this.all.splice(this.all.indexOf(metadata), 1);
        //             const propFiles = Array.isArray(metadata.files)
        //                 ? (console.warn(
        //                       "REGUILDED: An array of files for addons is unsupported. Defaulting to use the first item! [0]"
        //                   ),
        //                   metadata.files[0])
        //                 : metadata.files;
        //             metadata.files = propFiles;
        //             this.all.push(metadata);
        //             // Load the addon if enabled.
        //             isEnabled && this.load(metadata);
        //             resolve(metadata);
        //         })
        // );
    }

    /**
     * Loads a ReGuilded addon.
     * @param metadata addon to load onto Guilded
     */
    load(metadata: Addon): void {
        // TODO: Add-on support
        // // Try-catch errors to prevent conflicts with other plugins
        // try {
        //     console.log(`Loading addon by ID`, metadata.id);
        //     // Check if it's first time loading
        //     !~this.initialized.indexOf(metadata.id) && this.initializeAddon(metadata);
        //     metadata.core.load(this, this.webpack);
        // } catch (e) {
        //     console.error("Failed to load addon by ID", metadata.id, e);
        // }
    }

    /**
     * Initializes a ReGuilded addon.
     * @param metadata addon to init.
     */
    initializeAddon(metadata: Addon) {
        // TODO: Add-on support
        // // Gets the propFiles[0] file path, and if it doesn't exist, ignore it
        // const mainPath = join(metadata.dirname, metadata.files);

        // if (!existsSync(mainPath)) throw new Error("Missing main file");

        // // Get the main file
        // let main = require(mainPath);

        // // To check if it's valid
        // if (typeof main.init !== "function" && main.default) main = main.default;

        // if (typeof main.init === "function") {
        //     metadata.core = main;
        // } else
        //     console.error(
        //         "Addon has no pre-init function or has invalid formatting:",
        //         metadata.dirname
        //     );

        // // TODO: Add-on sandboxing
        // metadata.core.init();
        this.initialized.push(metadata.id);
    }

    /**
     * Unloads/removes a ReGuilded addon.
     * @param metadata addon to load onto Guilded
     * @param hardUnload determines if the addon should also be "uninitialized" false by default
     */
    unload(metadata: Addon, hardUnload = false) {
        // TODO: Add-on support
        // try {
        //     console.log("Unloading addon by ID", metadata.id);
        //     metadata.core.unload(this, this.webpack);
        //     if (hardUnload && ~this.initialized.indexOf(metadata.id)) {
        //         this.initialized.splice(this.initialized.indexOf(metadata.id), 1);
        //     }
        //     // Remove the addon from the cache
        //     const filePath = path.join(metadata.dirname, metadata.files);
        //     const metadataPath = path.join(metadata.dirname, "metadata.json");
        //     delete require.cache[require.resolve(filePath)];
        //     delete require.cache[require.resolve(metadataPath)];
        // } catch (e) {
        //     console.error("Failed to unload an addon by ID", metadata.id, e);
        // }
    }
}
