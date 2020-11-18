/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as assert from 'assert';
import { isWindows } from 'vs/base/common/platform';
import { getShellEnvironment } from 'vs/code/node/shellEnv';
import { INativeEnvironmentService } from 'vs/platform/environment/common/environment';
import { NullLogService } from 'vs/platform/log/common/log';

suite('getShellEnvironment', () => {

	test('should resolve shell environment', async () => {
		const shellEnvironment = await getShellEnvironment(new NullLogService(), { args: [] } as unknown as INativeEnvironmentService);
		if (isWindows) {
			assert.equal(Object.keys(shellEnvironment).length, 0);
		} else {
			assert.ok(Object.keys(shellEnvironment).length > 0);
		}
	});
});
