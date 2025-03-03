interface CreateClientSubscription {
  email?: string | null;
  phone?: string | null;
  status: number;
  message: string;
  error: string | null;
  submittedAt: string;
}

interface CreateBackInStockSubscription {
  email?: string | null;
  status: number;
  message: string;
  error: string | null;
  submittedAt: string;
}

/**
 * Subscribes a user to a specified email list.
 * @param email - The user's email address
 * @param listId - The email list ID (newsletter)
 * @returns A Promise resolving to the subscription data
 * @see https://developers.klaviyo.com/en/reference/create_client_subscription
 */
const newsletter = async (
  email: string,
  listId: string
): Promise<CreateClientSubscription> => {
  return await $fetch('/api/klaviyo', {
    method: 'POST',
    body: {
      data: {
        type: 'subscription',
        attributes: {
          profile: {
            data: {
              type: 'profile',
              attributes: { email }
            }
          }
        },
        relationships: {
          list: {
            data: {
              type: 'list',
              id: listId
            }
          }
        }
      }
    }
  });
};

/**
 * Subscribes a user to back-in-stock notifications.
 * @param email - The user's email address
 * @param variantId - The selected product variant ID
 * @returns A Promise resolving to the subscription data
 * @see https://developers.klaviyo.com/en/reference/create_client_back_in_stock_subscription
 */
const backInStock = async (
  email: string,
  variantId: string
): Promise<CreateBackInStockSubscription> => {
  return await $fetch('/api/klaviyo', {
    method: 'POST',
    body: {
      data: {
        type: 'back-in-stock-subscription',
        attributes: {
          channels: ['EMAIL'],
          profile: {
            data: {
              type: 'profile',
              attributes: { email }
            }
          }
        },
        relationships: {
          variant: {
            data: {
              type: 'catalog-variant',
              id: `$shopify:::$default:::${variantId}`
            }
          }
        }
      }
    }
  });
};

export default {
  newsletter,
  backInStock
};
