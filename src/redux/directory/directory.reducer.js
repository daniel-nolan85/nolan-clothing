const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_960_720.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/08/05/15/04/leather-2584298_960_720.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'trainers',
          imageUrl: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fHNuZWFrZXIlMjBwaG90b3Nob290fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',
          id: 3,
          linkUrl: 'shop/trainers'
        },
        {
          title: 'womens',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_960_720.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://images.unsplash.com/photo-1600442715817-4d9c8b6c729f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;