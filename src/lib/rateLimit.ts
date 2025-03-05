import { RateLimiter } from 'limiter';

const limiter = new RateLimiter({
  tokensPerInterval: 10,
  interval: 'minute',
});

export async function rateLimit() {
  const remainingRequests = await limiter.removeTokens(1);
  const hasRemainingRequests = remainingRequests >= 0;

  if (!hasRemainingRequests) {
    throw new Error('Too many requests. Please try again later.');
  }

  return true;
}
