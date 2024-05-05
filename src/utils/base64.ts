// src/utils/base64.ts

/**
 * Decodes a Base64 encoded string to a regular string with proper UTF-8 support.
 * This method ensures that special characters and line breaks are handled correctly.
 * @param {string} base64String - The Base64 encoded string.
 * @returns {string} - The decoded string.
 */
export const decodeBase64 = (base64String: string): string => {
	return decodeURIComponent(
		atob(base64String)
			.split("")
			.map((char) => {
				// Nested template literal to completely avoid string concatenation
				const hexCode = char.charCodeAt(0).toString(16);
				return `%${`00${hexCode}`.slice(-2)}`;
			})
			.join(""),
	);
};

/**
 * Encodes a string to a Base64 encoded string with proper UTF-8 support.
 * This method handles special characters and ensures the string is properly encoded.
 * @param {string} normalString - The regular string.
 * @returns {string} - The Base64 encoded string.
 */
export const encodeBase64 = (normalString: string): string => {
	return btoa(
		encodeURIComponent(normalString).replace(/%([0-9A-F]{2})/g, (match, p1) =>
			String.fromCharCode(Number.parseInt(p1, 16)),
		),
	);
};
