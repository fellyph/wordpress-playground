/*
 * True if the current environment is a GitHub Codespace.
 */
export function isGitHubCodespace() {
	return Boolean(
		process.env['CODESPACE_NAME'] &&
			process.env['GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN']
	);
}
