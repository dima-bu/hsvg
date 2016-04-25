provider('icons', [function(){
    return {
        $get: function() {
            return [


                {
                    typeicon: 'message-status',
                    iconid: 5,
                    cssclass: 'message-md -warning status-icon',
                    href: 'message'
                },

                {
                    typeicon: 'message-status',
                    iconid: 4,
                    cssclass: '"message-md -warning status-icon',
                    href: 'message'
                },

                {
                    typeicon: 'message-status',
                    iconid: 3,
                    cssclass: 'message-opened-md  -success status-icon',
                    href: 'message-opened'
                },

                {
                    typeicon: 'message-status',
                    iconid: 2,
                    cssclass: 'message-md -panic status-icon',
                    href: 'message'
                },

                {
                    typeicon: 'message-status',
                    iconid: 1,
                    cssclass: 'message-disabled-md status-icon -disabled status-icon',
                    href: 'message-disabled'
                },

                /*service icons*/

                {
                    typeicon: 'service-icon',
                    iconid: 1,
                    cssclass: 'taxi-sm -normal',
                    href: 'taxi'
                }

            ]
        }
    }
}])
