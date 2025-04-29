

export default [

    // perlin noise texture
    {
        name: 'perlinNoiseTexture',
        type: 'texture',
        path: "./car-racing/perlin.png"
    },

    // cloud source
    {
        name: 'cloudGLTFModel',
        type: 'gltfModel',
        path: "./car-racing/cloud.glb"
    },
    {
        name: 'cloudBakedTexture',
        type: 'texture',
        path: "./car-racing/bakedCloud.jpg"
    },

    // tree source
    {
        name: 'treeGLTFModel',
        type: 'gltfModel',
        path: "./car-racing/tree.glb"
    },
    {
        name: 'treeBakedTexture',
        type: 'texture',
        path: "./car-racing/bakedTreeTexture.jpg"
    },

    // car source
    {
        name: 'carGLTFModel',
        type: 'gltfModel',
        path: "./car-racing/car.glb"
    },


    // font
    {
        name: 'fontLevel',
        type: 'font',
        path: "./car-racing/helvetiker_regular.typeface.json"
    }
]