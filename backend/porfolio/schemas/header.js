export default{
    name:'header',
    title:'Header',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'firstdesc',
            title:'Firstdesc',
            type:'string'
        },
        {
            name:'seconddesc',
            title:'Seconddesc',
            type:'string'
        },
        {
            name:'profile',
            title:'Profile',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'image1',
            title:'Image1',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'image2',
            title:'Image2',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'image3',
            title:'Image3',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}