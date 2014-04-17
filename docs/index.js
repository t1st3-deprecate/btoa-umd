'use strict';

require.config({
  baseUrl: '',
  paths: {
    jquery: 'lib/jquery',
    btoa: 'lib/btoa-umd',
    httpbackend: 'lib/backends/backend-jquery',
    httpresponse: 'lib/http-response',
    bootstrap: 'lib/bootstrap.min'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    btoa: {
      exports: 'Btoa'
    },
    bootstrap: {
      deps: [
        'jquery'
      ]
    }
  },
  scriptType: 'text/javascript'
});

require([
  'jquery',
  'btoa',
  'lib/codemirror',
  'lib/codemirror/javascript',
  'bootstrap'
], function ($, Btoa, CodeMirror) {
  $(document).ready(function () {
    $('#in').on('click', function () {
      var btoa = function (b) {
        var umd = new Btoa();
        return umd.handle(b).a;
      };
      $('#out').html(btoa('Hello world'));
    });
    $('#reset').on('click', function () {
      $('#out').html('No result yet!');
    });
    
    $('pre.js > code.js').each(function () {
      var self = $(this).parent();
      self.find('code.js').hide(),
      CodeMirror(self[0], {
        value: self.find('code.js').html(),
        mode: 'javascript',
        tabSize: 2,
        lineNumbers: true,
        readOnly: true
      });
    });
  });
});
