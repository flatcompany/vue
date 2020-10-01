Vue.component("post-работа-1", {
    template: "<div>Posts component</div>"
  });

Vue.component("post-работа-2", {
    template: "<div>Archive component</div>"
  });

  Vue.component("post-работа-3", {
    template: "<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium nibh ipsum. Mi eget mauris pharetra et ultrices. Adipiscing tristique risus nec feugiat in fermentum posuere. Habitant morbi tristique senectus et netus. Bibendum neque egestas congue quisque egestas. Amet est placerat in egestas erat imperdiet sed euismod. Sit amet tellus cras adipiscing enim eu turpis egestas. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Morbi blandit cursus risus at ultrices. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Velit egestas dui id ornare arcu odio ut sem nulla. Porttitor rhoncus dolor purus non. Iaculis nunc sed augue lacus. Odio tempor orci dapibus ultrices in. Leo a diam sollicitudin tempor id eu nisl nunc mi. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet volutpat consequat mauris nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium nibh ipsum. Mi eget mauris pharetra et ultrices. Adipiscing tristique risus nec feugiat in fermentum posuere. Habitant morbi tristique senectus et netus. Bibendum neque egestas congue quisque egestas. Amet est placerat in egestas erat imperdiet sed euismod. Sit amet tellus cras adipiscing enim eu turpis egestas. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Morbi blandit cursus risus at ultrices. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Velit egestas dui id ornare arcu odio ut sem nulla. Porttitor rhoncus dolor purus non. Iaculis nunc sed augue lacus. Odio tempor orci dapibus ultrices in. Leo a diam sollicitudin tempor id eu nisl nunc mi. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet volutpat consequat mauris nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium nibh ipsum. Mi eget mauris pharetra et ultrices. Adipiscing tristique risus nec feugiat in fermentum posuere. Habitant morbi tristique senectus et netus. Bibendum neque egestas congue quisque egestas. Amet est placerat in egestas erat imperdiet sed euismod. Sit amet tellus cras adipiscing enim eu turpis egestas. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Morbi blandit cursus risus at ultrices. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Velit egestas dui id ornare arcu odio ut sem nulla. Porttitor rhoncus dolor purus non. Iaculis nunc sed augue lacus. Odio tempor orci dapibus ultrices in. Leo a diam sollicitudin tempor id eu nisl nunc mi. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet volutpat consequat mauris nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium nibh ipsum. Mi eget mauris pharetra et ultrices. Adipiscing tristique risus nec feugiat in fermentum posuere. Habitant morbi tristique senectus et netus. Bibendum neque egestas congue quisque egestas. Amet est placerat in egestas erat imperdiet sed euismod. Sit amet tellus cras adipiscing enim eu turpis egestas. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Morbi blandit cursus risus at ultrices. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Velit egestas dui id ornare arcu odio ut sem nulla. Porttitor rhoncus dolor purus non. Iaculis nunc sed augue lacus. Odio tempor orci dapibus ultrices in. Leo a diam sollicitudin tempor id eu nisl nunc mi. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet volutpat consequat mauris nunc. </div>"
  });


var app = new Vue ({
    el: '#app',

    data: {
        avatar: "img/avatar.jpg",
        name:'Андрей',       
        surname: 'Вернигоров',
        currentTab: 'О себе',
        tabs: [
                {id: 1, page: 'О себе'},
                {id: 2, page: 'Портфолио'},
                {id: 3, page: 'Навыки'},
                {id: 4, page: 'Контакты'}
            ],
        type: 1,
        activeMenu: false,
        activeMobileMenu: false,
        activePost: false,
        show: false,
        links: [
            {id: 1, color: "social-item vk", icon: 'fab fa-vk', link: 'https://vk.com/vernigorov_a'},
            {id: 2, color: "social-item tg", icon: 'fab fa-telegram-plane', link: 'https://t-do.ru/vernigorov'},
            {id: 3, color: "social-item fb", icon: 'fab fa-facebook-f', link: 'https://www.facebook.com/people/%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%92%D0%B5%D1%80%D0%BD%D0%B8%D0%B3%D0%BE%D1%80%D0%BE%D0%B2/100047013076889'},
            {id: 4, color: "social-item wh", icon: 'fab fa-whatsapp', link: 'https://wa.me/79508568999'}
        ],

        currentPost: "Работа-1",
        posts: ["Работа-1", "Работа-2", "Работа-3"]
    },

    computed: {
        currentPostComponent: function() {
          return "post-" + this.currentPost.toLowerCase();
        }
    },

    created: function() {
      
    },

    methods: {
      
    }
})