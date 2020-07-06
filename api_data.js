define({ "api": [
  {
    "type": "post",
    "url": "/profil/anahtarlarim/ekle",
    "title": "Create Access Tokens",
    "name": "Create_Access_Tokens",
    "group": "Access_Tokens",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/UserController.php",
    "groupTitle": "Access_Tokens"
  },
  {
    "type": "post",
    "url": "/profil/anahtarlarim/sil",
    "title": "Delete Access Tokens",
    "name": "Delete_Access_Tokens",
    "group": "Access_Tokens",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token_id",
            "description": "<p>ID of the token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/UserController.php",
    "groupTitle": "Access_Tokens"
  },
  {
    "type": "get",
    "url": "/profil/anahtarlarim",
    "title": "User' Access Tokens",
    "name": "User'_Access_Tokens",
    "group": "Access_Tokens",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "access_tokens",
            "description": "<p>User's access tokens.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/UserController.php",
    "groupTitle": "Access_Tokens"
  },
  {
    "type": "post",
    "url": "/sunucu/sertifikaOnayi",
    "title": "Add SSL Sertificate",
    "name": "Add_SSL_Sertificate",
    "group": "Certificate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_hostname",
            "description": "<p>Server's hostname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "origin",
            "description": "<p>Target port to retrieve certificate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notification_id",
            "description": "<p>Request Notification Id (OPTIONAL)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Certificate/MainController.php",
    "groupTitle": "Certificate"
  },
  {
    "type": "post",
    "url": "/sunucu/sertifikaSil",
    "title": "Remove SSL Sertificate",
    "name": "Remove_SSL_Sertificate",
    "group": "Certificate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "certificate_id",
            "description": "<p>Certificate Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Certificate/MainController.php",
    "groupTitle": "Certificate"
  },
  {
    "type": "post",
    "url": "/sunucu/sertifikaGuncelle",
    "title": "Renew SSL Sertificate",
    "name": "Renew_SSL_Sertificate",
    "group": "Certificate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "certificate_id",
            "description": "<p>Certificate id to renew.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Certificate/MainController.php",
    "groupTitle": "Certificate"
  },
  {
    "type": "post",
    "url": "/sunucu/sertifikaTalep",
    "title": "Request SSL Sertificate",
    "name": "Request_SSL_Sertificate",
    "group": "Certificate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hostname",
            "description": "<p>Target Server' Hostname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "port",
            "description": "<p>Target Server' Port.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>Requested certificate information..</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Certificate/MainController.php",
    "groupTitle": "Certificate"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Homepage",
    "name": "HomePage",
    "description": "<p>Liman' database stats.</p>",
    "group": "General",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_count",
            "description": "<p>Count of the servers in Liman.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "extension_count",
            "description": "<p>Count of the extensions in Liman.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_count",
            "description": "<p>Count of the users in Liman.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "settings_count",
            "description": "<p>Count of the settings in Liman.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/HomeController.php",
    "groupTitle": "General"
  },
  {
    "type": "post",
    "url": "/",
    "title": "Liman Stats",
    "name": "Liman_Stats",
    "description": "<p>Hardware stats of Liman.</p>",
    "group": "General",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cpu",
            "description": "<p>CPU Usage of Liman.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ram",
            "description": "<p>Ram Usage of Liman.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disk",
            "description": "<p>Disk Usage of Liman.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "network",
            "description": "<p>Network Usage of Liman.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/HomeController.php",
    "groupTitle": "General"
  },
  {
    "type": "get",
    "url": "/taleplerim",
    "title": "Personal Liman Requests List",
    "name": "Personal_Liman_Requests_List",
    "group": "General",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "requests",
            "description": "<p>Array of request objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/HomeController.php",
    "groupTitle": "General"
  },
  {
    "type": "post",
    "url": "/talep",
    "title": "Send Personal Liman Request",
    "name": "Send_Personal_Liman_Request",
    "group": "General",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Note of the request</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>server,extension,other</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "speed",
            "description": "<p>normal,urgent</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/HomeController.php",
    "groupTitle": "General"
  },
  {
    "type": "get",
    "url": "/modules",
    "title": "Get Modules List",
    "name": "Get_Modules_List",
    "group": "Module",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "modules",
            "description": "<p>List of modules array.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Module/MainController.php",
    "groupTitle": "Module"
  },
  {
    "type": "post",
    "url": "/ayar/bildirimKanali/ekle",
    "title": "Add External Notification Channel",
    "name": "Add_External_Notification_Channel",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of The Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with randomly notification token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Notification/ExternalNotificationController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/ayar/bildirimKanali/duzenle",
    "title": "Edit External Notification Channel",
    "name": "Edit_External_Notification_Channel",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the notification</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the notification</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with randomly notification token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Notification/ExternalNotificationController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/bildirimlerSistem",
    "title": "Get Admin Notifications",
    "name": "Get_Admin_Notifications",
    "group": "Notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "notifications",
            "description": "<p>getNotifications</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Notification/MainController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/bildirimler",
    "title": "Get New Notifications",
    "name": "Get_New_Notifications",
    "group": "Notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user",
            "description": "<p>User Notifications</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "admin",
            "description": "<p>Admin Notifications</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Notification/MainController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/talep/{permission_id}",
    "title": "Get Request",
    "name": "Get_Request",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "permission_id",
            "description": "<p>ID of the permission</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with randomly notification token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Permission/MainController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/talepler",
    "title": "Get System Requests",
    "name": "Get_System_Requests",
    "group": "Notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with randomly notification token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Permission/MainController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/bildirimler",
    "title": "Get User Notifications",
    "name": "Get_User_Notifications",
    "group": "Notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "notifications",
            "description": "<p>getNotifications</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Notification/MainController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/bildirim/adminOku",
    "title": "Read All Admin Notifications",
    "name": "Read_All_Admin_Notifications",
    "group": "Notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Notification/MainController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/bildirimler/oku",
    "title": "Read All Notifications",
    "name": "Read_All_Notifications",
    "group": "Notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Notification/MainController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/bildirim/oku",
    "title": "Read Notification",
    "name": "Read_Notification",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notification_id",
            "description": "<p>ID of the notification</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "string",
            "description": "<p>ID of the notification</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Notification/MainController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/ayar/bildirimKanali/sil",
    "title": "Remove External Notification Channel",
    "name": "Remove_External_Notification_Channel",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the notification</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Notification/ExternalNotificationController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/bildirim/sil",
    "title": "Remove Notification",
    "name": "Remove_Notification",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notification_id",
            "description": "<p>ID of the notification</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Notification/MainController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/bildirim/okunanlar/sil",
    "title": "Remove Read Notifications",
    "name": "Remove_Read_Notifications",
    "group": "Notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Notification/MainController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/ayar/bildirimKanali/yenile",
    "title": "Renew External Notification Channel Token",
    "name": "Renew_External_Notification_Channel_Token",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the notification</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with randomly notification token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Notification/ExternalNotificationController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/talep/guncelle",
    "title": "Update System Request",
    "name": "Update_System_Request",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_id",
            "description": "<p>ID of the request</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>1:In Progress, 2:Completed, 3:Deny, 4:Delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with randomly notification token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Permission/MainController.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/rol/yetki_listesi/fonksiyon_ekle",
    "title": "Add Function Permissions to Role",
    "name": "Add_Function_Permissions_to_Role",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>ID of the Role.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "functions",
            "description": "<p>Name of the functions.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/rol/ekle",
    "title": "Add New Role",
    "name": "Add_New_Role",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Role Name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/rol/yetki_listesi/ekle",
    "title": "Add Permission to Role",
    "name": "Add_Permission_to_Role",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>server, extension, liman.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>ID of the Role.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>Ids of the type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/rol/rol_ekle",
    "title": "Add Roles to User",
    "name": "Add_Roles_to_User",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>Only ids of target roles.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/rol/kullanici_ekle",
    "title": "Add Users to Role",
    "name": "Add_Users_to_Role",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>Id of the role</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>Only ids of target users.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/rol/liste",
    "title": "All Roles List",
    "name": "All_Roles_List",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>ID of the Role</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "value",
            "description": "<p>Role List.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/rol/yetki_listesi",
    "title": "Get Permissions List for Role",
    "name": "Get_Permissions_List_for_Role",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>server, extension, liman.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>Only ids of target users.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "value",
            "description": "<p>Results Array according to type.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/rol/{role}",
    "title": "Get Role",
    "name": "Get_Role",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>ID of the Role</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "role",
            "description": "<p>Role details.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "servers",
            "description": "<p>Role' Servers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "extensions",
            "description": "<p>Role' Extension.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "limanPermissions",
            "description": "<p>Role' Liman Permissions.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/rol/yetki_listesi/fonksiyon_sil",
    "title": "Remove Function Permissions to Role",
    "name": "Remove_Function_Permissions_to_Role",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "functions",
            "description": "<p>Object ids with , delimeter.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/rol/yetki_listesi/sil",
    "title": "Remove Permission from Role",
    "name": "Remove_Permission_from_Role",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>server, extension, liman.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>ID of the Role.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>Ids of the type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/rol/sil",
    "title": "Remove Role",
    "name": "Remove_Role",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>Id of the role</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/rol/rol_sil",
    "title": "Remove Roles from User",
    "name": "Remove_Roles_from_User",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>Only ids of target roles.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/rol/kullanici_sil",
    "title": "Remove Users from Role",
    "name": "Remove_Users_from_Role",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>Id of the role.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>Only ids of target users.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/rol/eslestirme_ekle",
    "title": "Add Role Mapping",
    "name": "Add_Role_Mapping",
    "group": "Role_Mapping",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dn",
            "description": "<p>DN to map with Role.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>Target Role Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleMappingController.php",
    "groupTitle": "Role_Mapping"
  },
  {
    "type": "post",
    "url": "/rol/eslestirme_sil",
    "title": "Remove Role Mapping",
    "name": "Remove_Role_Mapping",
    "group": "Role_Mapping",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_mapping_id",
            "description": "<p>Target Role Mapping Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Roles/RoleMappingController.php",
    "groupTitle": "Role_Mapping"
  },
  {
    "type": "post",
    "url": "/lmn/private/reverseProxyRequest",
    "title": "Add Vnc Proxy Config",
    "name": "SandboxAddVncProxyConfig",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hostname",
            "description": "<p>server host you wish to use in vnc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "port",
            "description": "<p>server port you wish to use in vnc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/dispatchJob",
    "title": "Dispatch Background Job",
    "name": "SandboxDispatchJob",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "function_name",
            "description": "<p>Target function name to run</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "parameters",
            "description": "<p>Parameters to use in function.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Simply returns ok string.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/getFileApi",
    "title": "Receive file from the server.",
    "name": "SandboxGetFile",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "localPath",
            "description": "<p>Local full file path.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remotePath",
            "description": "<p>Remote full file path.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "output",
            "description": "<p>ok or no according to status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/getJobList",
    "title": "Get List and Status of Background Processes",
    "name": "SandboxGetJobList",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "function_name",
            "description": "<p>Target function to check</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "json",
            "description": "<p>hold, success, fail and total counts.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/openTunnel",
    "title": "OpenSSH Tunnel Request",
    "name": "SandboxOpenSSHTunnel",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remote_host",
            "description": "<p>server host you wish to tunnel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remote_port",
            "description": "<p>server port you wish to tunnel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>server username you wish to tunnel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>server password you wish to tunnel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Tunnel token to close later on.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/putFileApi",
    "title": "Send file to the server.",
    "name": "SandboxPutFile",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "localPath",
            "description": "<p>Local full file path.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remotePath",
            "description": "<p>Remote full file path you wish.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "output",
            "description": "<p>ok or no according to status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/runCommandApi",
    "title": "Run command on the server",
    "name": "SandboxRunCommand",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "command",
            "description": "<p>Command to run.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "output",
            "description": "<p>Output of the command.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/runScriptApi",
    "title": "Run script on the server",
    "name": "SandboxRunScript",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scriptName",
            "description": "<p>Script to run (inside scripts folder)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>Parameters as string -cli style-</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "runAsRoot",
            "description": "<p>If you wish to run script as root, simply send yes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "output",
            "description": "<p>Output of the script.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/lmn/private/stopTunnel",
    "title": "Close OpenSSH Tunnel",
    "name": "SandboxStopSSHTunnel",
    "group": "Sandbox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remote_host",
            "description": "<p>server host you wish to tunnel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remote_port",
            "description": "<p>server port you wish to tunnel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server_id",
            "description": "<p>Target Server Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension_id",
            "description": "<p>Target Extension Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated User Token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/Extension/Sandbox/InternalController.php",
    "groupTitle": "Sandbox"
  },
  {
    "type": "post",
    "url": "/market/guncellemeKontrol",
    "title": "Check Liman Updates",
    "name": "Check_Liman_Updates",
    "group": "Updates",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>all components of the liman with update statuses.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/MarketController.php",
    "groupTitle": "Updates"
  },
  {
    "type": "post",
    "url": "/market/kontrol",
    "title": "Check Market Access",
    "name": "Check_Market_Access",
    "group": "Updates",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Status of the connection.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/MarketController.php",
    "groupTitle": "Updates"
  },
  {
    "type": "post",
    "url": "/kullanici/ekle",
    "title": "Add Liman User",
    "name": "Add_Liman_User",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with randomly created user password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/kullanici/sil",
    "title": "Remove Liman User",
    "name": "Remove_Liman_User",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>User's ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/kullanici/parola/sifirla",
    "title": "Reset Liman User' Password",
    "name": "Reset_Liman_User'_Password",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>User's ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with new random password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/profil",
    "title": "Update Self Password",
    "name": "Update_Self_Password",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>User' old password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>New Password Confirmation</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/user/update",
    "title": "Update User Data",
    "name": "Update_User_Data",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User' new username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User' new email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>User' new status, 0 for regular, 1 for administrator.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/kasa/ekle",
    "title": "Add Key",
    "name": "Add_Key",
    "group": "Vault",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Key Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New Password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/UserController.php",
    "groupTitle": "Vault"
  },
  {
    "type": "post",
    "url": "/user/setting/delete",
    "title": "Delete Vault Key",
    "name": "Delete_Vault_Key",
    "group": "Vault",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "setting_id",
            "description": "<p>Target setting to delete.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/UserController.php",
    "groupTitle": "Vault"
  },
  {
    "type": "get",
    "url": "/kasa",
    "title": "Get Vault Keys",
    "name": "Get_Vault_Keys",
    "group": "Vault",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "settings",
            "description": "<p>User's Settings/Keys</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "servers",
            "description": "<p>User's granted servers list.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/UserController.php",
    "groupTitle": "Vault"
  },
  {
    "type": "post",
    "url": "/user/setting/update",
    "title": "Update Vault Key",
    "name": "Update_Vault_Key",
    "group": "Vault",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "setting_id",
            "description": "<p>Target setting to update.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_value",
            "description": "<p>New Value of the setting.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Message with status.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/Http/Controllers/UserController.php",
    "groupTitle": "Vault"
  }
] });
