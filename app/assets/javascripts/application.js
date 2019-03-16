//= require jquery3
//= require jquery_ujs
//= require_tree .
 
 
 $(function (){
    
    var $pictures = $('#photos');
    
    $.ajax({ 
        type: 'GET',
        url:  'https://photorankapi-a.akamaihd.net/customers/215757/media/photorank?rights_given=0&include_tagged_galleries=0&auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18',
//        'https://photorankapi-a.akamaihd.net/streams/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2',
        
//        'https://photorankapi-a.akamaihd.net/customers/215757/streams/search?version=v2.2&auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&tag_key=acme-anvil-50lb',
        success: function(media){
            console.log(media);
            var i;
            $pictures.append('<div id=0><img src=' + media.data._embedded.media[0].images.mobile + ' id=P0></div>'); 
            for(i=1; i < 5; i++){
                $pictures.append('<div class=1><img src=' + media.data._embedded.media[i].images.thumbnail + ' id=P'+ i + '></div>');
            }
            
            
//            $.each(pictures, function(i, picture){
//                console.log(picture);
//                $pictures.append(picture._embedded.media[i].images);
//            }); 
        }
    });
});
