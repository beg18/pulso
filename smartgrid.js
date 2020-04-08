const smartgrid = require('smart-grid');

smartgrid('src/css/libs', {
    mobileFirst: false,
    filename: "smart-grid",
    columns: 12,
    offset: "20px",
    container: {
        maxWidth: "1140px",
        fields: "20px"
    },
    breakPoints: {
        lg: {
            width: "1200px",
            fields: "10px"
        },
        md: {
            width: "992px",
            fields: "10px"
        },
        sm: {
            width: "768px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "320px"
        }
    },
    mixinNames: {
        container: "wrapper",
        size: "beam"
    },
});

smartgrid('src/css/libs', settings);




/*
smartgrid('.');
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */