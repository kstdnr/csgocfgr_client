// import startApp from '../helpers/start-app';
//
// var App;
//
// module('Integration - Radar Page', {
//   setup: function() {
//     App = startApp();
//   },
//   teardown: function() {
//     App.reset();
//   }
// });
//
// test('Should navigate to the Radar page', function() {
//   visit('/n/rate').then(function() {
//     click("a:contains('Radar')").then(function() {
//       equal(find('h1.logo').text(), 'CS:GO  Configr BETA');
//       equal(find('div.instructions').find('h3').text(), 'Instructions');
//       equal(find('section').eq(0).find('h3').text(), 'Radar');
//       equal(find('section').eq(1).find('h3').text(), 'Preview');
//     });
//   });
// });
//
// test('Should close instructions', function() {
//   visit('/n/radar').then(function() {
//     click('a.instructions--close').then(function() {
//       notEqual(find('h3').text(), 'Instructions');
//     });
//   });
// });
//
// test('Should download cfg file', function() {
//   visit('/n/radar').then(function() {
//     click('button.btn--download').then(function() {
//       expect(0);
//       console.log('File should download, any other way to test this?');
//     });
//   });
// });
//
// test('Should download cfg file and redirect to show page', function() {
//   visit('/n/radar').then(function() {
//     click('button.btn--download__save').then(function() {
//       console.log('File should download, any other way to test this?');
//       equal(find('h1.logo').text(), 'CS:GO  Configr');
//       equal(find('section').eq(0).find('h3').text(), 'Preview');
//     });
//   });
// });
