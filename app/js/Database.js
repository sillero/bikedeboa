var BIKE = BIKE || {};

BIKE.Database = {
  ///////////////////
  // G L O B A L S //
  ///////////////////

  // API path, without the final slash ('/')
  API_URL: 'https://bikedeboa-api.herokuapp.com',
  _authToken: '',
  _headers: {}, 


  ///////////////////
  // M E T H O D S //
  ///////////////////

  _removeAll: function() {
    var self = this;

    console.log('Removing all entries in 5 seconds...');
 
    setTimeout(function() {
      $.ajax({
        type: 'DELETE',
        headers: self._headers,
        url: self.API_URL + '/local',
      }).done(function(data) {
        console.log(data);
      });
    }, 5000);
  },

  sendCheckin: function(placeId, callback) {
    var self = this;

    $.ajax({
      type: 'post',
      headers: self._headers,
      url: self.API_URL + '/checkin',
      data: {
        idLocal: placeId,
      },
      success: function(data) {
        console.log('Check-in success.');

        if (callback && typeof callback === 'function') {
          callback();
        }
      }
    });
  },

  authenticate: function(callback) {
    var self = this;

    $.ajax({
      type: 'post',
      headers: self._headers,
      url: self.API_URL + '/token',
      data: {
        username: 'cristiano',
        password: 'abcd123'
      },
      success: function(data) {
        if (data.token && data.token.length > 0) {
          console.log('Authentication successful.');
          self._authToken = data.token;
          self._headers = {
            'x-access-token': data.token
          }

          if (callback && typeof callback === 'function') {
            callback();
          }
        }
      }
    });
  },

  sendReview: function(placeId, rating, callback) {
    var self = this;

    $.ajax({
      type: 'post',
      headers: self._headers,
      url: self.API_URL + '/review',
      data: { 
        idLocal: placeId,
        rating: rating
      },
      success: function(data) {
        console.log('Review success.');

        if (callback && typeof callback === 'function') {
          callback();
        }
      }
    });
  },

  sendPlace: function(place, callback) {
    var self = this;

    console.log('Sending new place:');
    console.log(place);

    $.ajax({
      type: 'post',
      headers: self._headers,
      url: self.API_URL + '/local',
      data: place,
      error: function(e) {
        console.error(e);
      },
      success: function(data) {
        console.log('Addition success!');

        if (callback && typeof callback === 'function') {
          callback();
        }
      }
    });
  },

  getAllTags: function(successCB, failCB, alwaysCB) {
    var self = this;

    console.log('Getting tags...');

    $.ajax({
      type: 'get',
      headers: self._headers,
      url: self.API_URL + '/tag'
    }).done(function(data) {
      if (data && data.length > 0) {
        console.log('Successfully retrieved ' + data.length + ' tags.');

        tags = data;

        idToTag = {};
        tagToId = {};
        tags.forEach(tagObj => {
          idToTag[tagObj.id] = tagObj.name;
          tagToId[tagObj.name] = tagObj.id;
        });

        if (successCB && typeof successCB === 'function') {
          successCB();
        }
      } else if (failCB && typeof failCB === 'function') {
        failCB();
      }
    })
    .fail(function() {
      if (failCB && typeof failCB === 'function') {
        failCB();
      }
    })
    .always(function() {
      if (alwaysCB && typeof alwaysCB === 'function') {
        alwaysCB();
      }
    });
  },

  getPlaces: function(successCB, failCB, alwaysCB) {
    var self = this;

    console.log('Getting all places...');

    $.ajax({
      type: 'get',
      headers: self._headers,
      url: self.API_URL + '/local'
    }).done(function(data) {
      console.log('Successfully retrieved ' + data.length + ' places!');

      markers = data;

      if (successCB && typeof successCB === 'function') {
        successCB();
      }
    })
    .fail(function() {
      if (failCB && typeof failCB === 'function') {
        failCB();
      }
    })
    .always(function() {
      if (alwaysCB && typeof alwaysCB === 'function') {
        alwaysCB();
      }
    });
  },
};