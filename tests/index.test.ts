import { createRedditClient } from "../src"
import { secrets } from "../src/secrets"

const client = createRedditClient({ clientId: secrets.clientId, secret: secrets.secret })

test("Should retrieve access token", async () => {
    const accessTokenResponse = await client.getAccessToken()
    expect(Object.keys(accessTokenResponse)).toEqual(
        expect.arrayContaining(["access_token", "token_type", "device_id", "expires_in", "scope"])
    )
})
