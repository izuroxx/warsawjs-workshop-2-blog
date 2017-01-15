/**
 * Created by izuic on 15.01.2017.
 */
(function (root) {
    class AddPostFormView {
        constructor() {
            //1.pobrac template dom
            //2.wyrenderowac
            //3.pobrac
            //4.ustawic listenery
            this.template = $('#template-add-post').html();
            this.render();
            this.$form = $('#add-post-form');
            this.setupListeners();

        }
        render(){
            let $container = $('#view-container');
            let compiled = root.Handlebars.compile(this.template);
            $container.append(compiled);
            console.log($container);
        }
        setupListeners(){
            this.$form.submit((event) => this.submitFormHandler(event))
        };
        submitFormHandler(){
            $(document).trigger('add-post-form: submit');
        };
    }
    root.Blog.AddPostFormView = AddPostFormView;

}(window));