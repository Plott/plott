/**
 *Plott is an open-source project written in JavaScript working to create a modular high accuracy indoor positioning system
 *using WiFi fingerprinting. The goal of Plott is to create an API that is capable of tracking a targeted device within 1 foot
 *of its actual location and easily integrate with existing JavaScript web mapping libraries via GeoJson. In addition to the
 *technical goals of Plott, the project is being developed to preform geospatial analysis on K9 Nose Work training techniques.
 *
 * @module plott
 * @summary Indoor Positioning API
 */
module.exports = {
  wifiscanner: require('plott-wifi-scanner'),
  rssiQuality: require('plott-rssi-quality'),
  qualityDistance: require('plott-quality-distance'),
  mongo: require('plott-mongo'),
  mongoModels: require('plott-mongo-models')
};
