import { get } from "axios";

import store from "../store/index";

import { locales } from "../utils/regions";

const protocol = "https://";
const host = ".api.blizzard.com/";

function getApiAccount({ region, account }) {
  const resource = `d3/profile/${account}/`;
  const API_URL = `${protocol}${region}${host}${resource}`;
  const locale = locales[region];

  const params = {
    access_token: store.state.oauth.accessToken,
    locale,
  };

  return get(API_URL, { params });
}

/**
 * Returns a single hero
 * GET - /d3/profile/{battleTag}/hero/{heroId}
 * @param region {String}
 * @param battleTag {String}
 * @param heroId {String}
 * @returns {Promise}
 */
function getApiHero({ region, battleTag, heroId }) {
  const resource = `d3/profile/${battleTag}/hero/${heroId}`;
  const API_URL = `${protocol}${region}${host}${resource}`;
  const locale = locales[region];

  const params = {
    access_token: store.state.oauth.accessToken,
    locale,
  };

  return get(API_URL, { params });
}

/**
 * Returns a list of items for the specified hero.
 * GET – /d3/profile/{battleTag}/hero/{heroId}/items
 * @param region {String}
 * @param battleTag {String}
 * @param heroId {String}
 * @returns {Promise}
 */
function getApiDetailedHeroItems({ region, battleTag, heroId }) {
  const resource = `d3/profile/${battleTag}/hero/${heroId}/items`;
  const API_URL = `${protocol}${region}${host}${resource}`;
  const locale = locales[region];

  const params = {
    access_token: store.state.oauth.accessToken,
    locale,
  };

  return get(API_URL, { params });
}

export { getApiAccount, getApiHero, getApiDetailedHeroItems };
