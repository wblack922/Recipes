(function(){
    var newscript = document.createElement('script');
       newscript.type = 'text/javascript';
       newscript.async = true;
       newscript.src = 'https://www.gstatic.com/firebasejs/3.0.2/firebase.js';
    (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
  })();
  
  _setFormData = function setFormData (sel, data) {
    console.info('setting form to data', data);
    var inputList = document.querySelectorAll(sel + ' [name]');
    [].forEach.call(inputList, function(input) {
        console.log(input);
        if (data[input.name] && data[input.name] !== "undefined") {
          input.value = data[input.name];
        }
    });
  };
  var _fb;
  var fbToForm = function fbToForm (key, sel) {
      var config = config || {
          apiKey: "AIzaSyB2A7_0JF1oNFKsCcKSImPyWTOf90k8OJY",
          authDomain: "recipe-ed001.firebaseapp.com",
          databaseURL: "https://recipe-ed001-default-rtdb.firebaseio.com",
          storageBucket: "recipe-ed001.appspot.com",
      };
      _fb = _fb && _fb.name === "fbToForm" ? _fb : firebase.initializeApp(config, "fbToForm");
      _fb.database().ref('user-data/' + key).on('value', function(snapshot) {
          _setFormData(sel, snapshot.val());
      });
  };