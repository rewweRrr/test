import {execute} from './execute';

export function runReleasePlease(
    version: string,
    enabledDryRun: boolean,
): void {
    const dryRun = enabledDryRun ? '--dry-run' : '';

    execute(`npm run release -- --release-as ${version} ${dryRun}`);
}