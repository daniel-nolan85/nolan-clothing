const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_960_720.jpg',  //Image by <a href="https://pixabay.com/users/1643606-1643606/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2309519">Pera Detlic</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2309519">Pixabay</a>
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/08/05/15/04/leather-2584298_960_720.jpg',  //Image by <a href="https://pixabay.com/users/stocksnap-894430/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2584298">StockSnap</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2584298">Pixabay</a>
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'trainers',
          imageUrl: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fHNuZWFrZXIlMjBwaG90b3Nob290fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',  //<span>Photo by <a href="https://unsplash.com/@hermez777?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Hermes Rivera</a> on <a href="https://unsplash.com/s/photos/sneaker-photoshoot?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
          id: 3,
          linkUrl: 'shop/trainers'
        },
        {
          title: 'womens',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_960_720.jpg',  //Image by <a href="https://pixabay.com/users/danielsampaioneto-5723932/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2705642">Daniel Sampaio Donate if you want (Paypal)</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2705642">Pixabay</a>
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://images.unsplash.com/photo-1600442715817-4d9c8b6c729f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60',  //<span>Photo by <a href="https://unsplash.com/@karsten116?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Karsten Winegeart</a> on <a href="https://unsplash.com/s/photos/black-man-cool?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
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