import { APIVersion } from "discord-api-types/v10";

/**
 * Makes a request to the Discord API.
 *
 * @param c - The Cloudflare request context.
 * @param route - The route to make the request to.
 * @param method - The HTTP method to use for the request.
 * @param body - The optional request body.
 * @returns The parsed JSON response from the Discord API.
 */
export default async function discordApiFetch(
    c: { env: { DISCORD_APPLICATION_TOKEN: string } },
    route: string,
    method: string,
    body?: unknown
) {
    const res = await fetch(requestUrl(route), {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${c.env.DISCORD_APPLICATION_TOKEN}`,
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    // Promise the result as JSON, or return null if no content
    if (res.status === 204) return null;
    return res.json();
}

export const requestUrl = (route: string): string => `https://discord.com/api/v${APIVersion}${route}` as const;