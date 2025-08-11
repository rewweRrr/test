import {type CommonExecOptions, execSync} from 'node:child_process';

export function execute(shell: string, options?: Partial<CommonExecOptions>): string {
    console.log(`ᐅ ${shell}`);

    return execSync(
        shell,
        options ?? {
            stdio: 'inherit',
            encoding: 'utf8',
        },
    )
        ?.toString()
        .trim();
}