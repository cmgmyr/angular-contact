YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Contact",
        "ContactCreateCtrl",
        "ContactDetailCtrl",
        "ContactListCtrl",
        "contactEmail"
    ],
    "modules": [
        "contactApp",
        "contactControllers",
        "contactDirectives",
        "contactServices"
    ],
    "allModules": [
        {
            "displayName": "contactApp",
            "name": "contactApp",
            "description": "The contactApp module is the application core module"
        },
        {
            "displayName": "contactControllers",
            "name": "contactControllers",
            "description": "Initializes ContactCreateCtrl which will handle\nall functionality to create a new contact"
        },
        {
            "displayName": "contactDirectives",
            "name": "contactDirectives",
            "description": "The contactDirectives module controls all app directives"
        },
        {
            "displayName": "contactServices",
            "name": "contactServices",
            "description": "The contactServices module controls all app services"
        }
    ]
} };
});