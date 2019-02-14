/*
 *  Copyright (c) 2015-2019, Michael A. Updike All rights reserved.
 *  Licensed under the BSD-3-Clause
 *  https://opensource.org/licenses/BSD-3-Clause
 *  https://github.com/opus1269/screensaver/blob/master/LICENSE.md
 */
window.app = window.app || {};

/**
 * Manage Google Analytics tracking
 * @namespace
 */
app.GA = (function() {
  'use strict';

  /**
   * Tracking ID
   * @type {string}
   * @const
   * @private
   * @memberOf app.GA
   */
  const _TRACKING_ID = 'UA-61314754-1';

  /**
   * Event types
   * @type {{}}
   * @property {Chrome.GA.Event} LOAD_ALBUM_LIST - album list
   * @property {Chrome.GA.Event} LOAD_ALBUM - album
   * @property {Chrome.GA.Event} LOAD_PHOTO - photo
   * @property {Chrome.GA.Event} UPDATE_PHOTOS - update baseUrl of all photos
   * @const
   * @memberOf app.GA
   */
  const EVENT = {
    LOAD_ALBUM_LIST: {
      eventCategory: 'googlePhotosAPI',
      eventAction: 'loadAlbumList',
      eventLabel: '',
    },
    LOAD_ALBUM: {
      eventCategory: 'googlePhotosAPI',
      eventAction: 'loadAlbum',
      eventLabel: '',
    },
    LOAD_PHOTO: {
      eventCategory: 'googlePhotosAPI',
      eventAction: 'loadPhoto',
      eventLabel: '',
    },
    FETCH_ALBUMS: {
      eventCategory: 'googlePhotosAPI',
      eventAction: 'fetchAlbums',
      eventLabel: '',
    },
    UPDATE_PHOTOS: {
      eventCategory: 'googlePhotosAPI',
      eventAction: 'updatePhotos',
      eventLabel: '',
    },
  };

  /**
   * Event: called when document and resources are loaded<br />
   * Initialize Google Analytics
   * @private
   * @memberOf app.GA
   */
  function _onLoad() {
    // initialize analytics
    Chrome.GA.initialize(_TRACKING_ID, 'Photo Screensaver',
        'screensaver', Chrome.Utils.getVersion());
  }

  // listen for document and resources loaded
  window.addEventListener('load', _onLoad);

  return {
    EVENT: EVENT,
  };

})();


