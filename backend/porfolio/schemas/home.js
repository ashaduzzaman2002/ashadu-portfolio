export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            option: {
                hotspot: true
            }

        },

        {
            name: 'icon1url',
            title: 'icon1URL',
            type: 'image',
            option: {
                hotspot: true
            }

        },

        {
            name: 'icon2url',
            title: 'icon2URL',
            type: 'image',
            option: {
                hotspot: true
            }

        },

        {
            name: 'icon3url',
            title: 'icon3URL',
            type: 'image',
            option: {
                hotspot: true
            }

        },
        
    ]
}