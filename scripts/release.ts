import {getValueByFlag, hasFlag} from "./shared/argv.utils";
import {ReleaseMode} from "./shared/release-mode";
import {bumpVersion} from "./shared/bump-version";
import {version} from '../package.json';
import {runStandardVersion} from "./shared/run-standard-version";

const ci = hasFlag('--ci-mode');
const mode = getValueByFlag<ReleaseMode>('--release-as', 'minor');
const dryRun = getValueByFlag<'false' | 'true'>('--dry-run', 'false') === 'true';
const newVersion = bumpVersion(version, mode);

console.log(JSON.stringify({ci, mode, newVersion, dryRun}, null, 4));


(async function main(): Promise<void> {
    if (ci) {
        runStandardVersion(newVersion, dryRun);
    } else {
        //TODO
    }
})();