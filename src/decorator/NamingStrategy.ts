import {NamingStrategyMetadata} from "../metadata/NamingStrategyMetadata";
import {defaultMetadataStorage} from "../index";

/**
 * Decorator registers a new naming strategy to be used in naming things.
 */
export function NamingStrategy(name?: string): Function {
    return function (target: Function) {
        const strategyName = name ? name : (<any> target).name;
        defaultMetadataStorage().namingStrategyMetadatas.add(new NamingStrategyMetadata(target, strategyName));
    };
}
