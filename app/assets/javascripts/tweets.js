(function() {
  var RichMarkerBuilder, handler, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  RichMarkerBuilder = (function(_super) {
    __extends(RichMarkerBuilder, _super);

    function RichMarkerBuilder() {
      _ref = RichMarkerBuilder.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    RichMarkerBuilder.prototype.create_marker = function() {
      var options;
      options = _.extend(this.marker_options(), this.rich_marker_options());
      return this.serviceObject = new RichMarker(options);
    };

    RichMarkerBuilder.prototype.rich_marker_options = function() {
      var marker;
      marker = document.createElement("div");
      marker.setAttribute('class', 'marker_container');
      marker.innerHTML = this.args.marker;
      return {
        content: marker
      };
    };

    return RichMarkerBuilder;

  })(Gmaps.Google.Builders.Marker);

  handler = Gmaps.build('Google', {
    builders: {
      Marker: RichMarkerBuilder
    }
  });

  handler.buildMap({
    provider: {},
    internal: {
      id: 'map'
    }
  }, function() {
    var markers;
    markers = handler.addMarkers([
      {
        "lat": 0,
        "lng": 0,
        'marker': '<span>Here!</span>'
      }
    ]);
    handler.bounds.extendWith(markers);
    return handler.fitMapToBounds();
  });

}).call(this);