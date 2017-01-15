/**
 * Created by izuic on 15.01.2017.
 */
// controller korzysta z namespace-a
(function (root){
    'use strict';
    let Router = root.Blog.Router;
    let AddPostFormView = root.Blog.AddPostFormView;
    class Application {
        constructor() {
            this.setupListeners();
            new Router();
        }
        setupListeners(){
            $(document).on('router:home',()=> this.onRouterHomeHandler());
            $(document).on('router:post',()=> this.onRouterPostHandler());
}       onRouterPostHandler(){
            this.clearDOMContainer();
            $('#view-container').html('<h1>post</h1>');
        };
        onRouterHomeHandler(){
            this.clearDOMContainer();
            new AddPostFormView();
        };
        clearDOMContainer(){
            $('#view-container').empty();
        };
    }
    new Application();


}(window));