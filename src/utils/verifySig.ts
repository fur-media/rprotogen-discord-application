import { Context, Next } from 'hono';
import { verifyKey } from 'discord-interactions';

/**
 * Verify the X-Signature-Ed25519 and X-Signature-Timestamp headers from Discord match the request body.
 * If the signature is invalid, return a 401 Unauthorized response.
 * Otherwise, call the next middleware in the chain.
 * @param c Request context
 * @param next Hono Next middleware function
 */
export default async function verifySignature(c: Context, next: Next) {
    const signature = c.req.header('x-signature-ed25519');
    const timestamp = c.req.header('x-signature-timestamp');
    const body = await c.req.raw.clone().arrayBuffer();
    if (!signature || !timestamp) {
        return c.text('Invalid signature', 401);
    }
    const isValid = await verifyKey(body, signature, timestamp, c.env.DISCORD_APPLICATION_PUBLIC_KEY);
    if (!isValid) {
        return c.text('Invalid signature', 401);
    }
    await next();
}