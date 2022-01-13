"use strict";
exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ DashboardLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "@mui/icons-material/Logout"
var Logout_ = __webpack_require__(9801);
var Logout_default = /*#__PURE__*/__webpack_require__.n(Logout_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/icons-material/Search"
var Search_ = __webpack_require__(8017);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material/utils"
var utils_ = __webpack_require__(7077);
;// CONCATENATED MODULE: ./src/icons/user-circle.js


const UserCircle = (0,utils_.createSvgIcon)(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.5999 9.99999C19.5999 12.5461 18.5885 14.9879 16.7881 16.7882C14.9878 18.5886 12.546 19.6 9.9999 19.6C7.45382 19.6 5.01203 18.5886 3.21168 16.7882C1.41133 14.9879 0.399902 12.5461 0.399902 9.99999C0.399902 7.45392 1.41133 5.01212 3.21168 3.21177C5.01203 1.41142 7.45382 0.399994 9.9999 0.399994C12.546 0.399994 14.9878 1.41142 16.7881 3.21177C18.5885 5.01212 19.5999 7.45392 19.5999 9.99999ZM12.3999 6.39999C12.3999 7.03651 12.147 7.64696 11.697 8.09705C11.2469 8.54714 10.6364 8.79999 9.9999 8.79999C9.36338 8.79999 8.75293 8.54714 8.30285 8.09705C7.85276 7.64696 7.5999 7.03651 7.5999 6.39999C7.5999 5.76347 7.85276 5.15302 8.30285 4.70294C8.75293 4.25285 9.36338 3.99999 9.9999 3.99999C10.6364 3.99999 11.2469 4.25285 11.697 4.70294C12.147 5.15302 12.3999 5.76347 12.3999 6.39999ZM9.9999 11.2C8.85102 11.1998 7.72623 11.5294 6.7592 12.1497C5.79217 12.77 5.02355 13.6549 4.5447 14.6992C5.21991 15.4847 6.05703 16.1149 6.99864 16.5466C7.94024 16.9782 8.96407 17.2011 9.9999 17.2C11.0357 17.2011 12.0596 16.9782 13.0012 16.5466C13.9428 16.1149 14.7799 15.4847 15.4551 14.6992C14.9762 13.6549 14.2076 12.77 13.2406 12.1497C12.2736 11.5294 11.1488 11.1998 9.9999 11.2Z"
    })
}), 'UserCircle');

// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
;// CONCATENATED MODULE: ./src/components/dashboard-navbar.js










const DashboardNavbarRoot = styled_default()(material_.AppBar)(({ theme  })=>({
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3]
    })
);
const DashboardNavbar = ({ onSidebarOpen , ...other })=>{
    // const { } = props;
    const router = (0,router_.useRouter)();
    const { enqueueSnackbar , closeSnackbar  } = (0,external_notistack_.useSnackbar)();
    const onClickDetailPage = ()=>{
        router.push({
            pathname: "/account"
        });
    };
    const handleLogOut = async (event)=>{
        event.preventDefault();
        localStorage.clear();
        enqueueSnackbar("Successfully Logout from the application", {
            variant: "success"
        });
        router.push({
            pathname: "/login"
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(DashboardNavbarRoot, {
            sx: {
                left: {
                    lg: 280
                },
                width: {
                    lg: "calc(100% - 280px)"
                }
            },
            ...other,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
                disableGutters: true,
                sx: {
                    minHeight: 64,
                    left: 0,
                    px: 2
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                        onClick: onSidebarOpen,
                        sx: {
                            display: {
                                xs: "inline-flex",
                                lg: "none"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                            fontSize: "small"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            flexGrow: 1
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                        title: "Log out",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                            sx: {
                                ml: 1
                            },
                            onClick: handleLogOut,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Badge, {
                                color: "primary",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Logout_default()), {
                                    fontSize: "small"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                        sx: {
                            height: 40,
                            width: 40,
                            ml: 1
                        },
                        src: "",
                        onClick: onClickDetailPage,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(UserCircle, {
                            fontSize: "small"
                        })
                    })
                ]
            })
        })
    }));
};
DashboardNavbar.propTypes = {
    onSidebarOpen: (external_prop_types_default()).func
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/icons/user.js


const User = (0,utils_.createSvgIcon)(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        fillRule: "evenodd",
        d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
        clipRule: "evenodd"
    })
}), 'User');

;// CONCATENATED MODULE: ./src/icons/users.js


const Users = (0,utils_.createSvgIcon)(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        d: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
    })
}), 'Users');

;// CONCATENATED MODULE: ./src/components/logo.js



const Logo = (0,styles_.styled)((props)=>{
    const { variant , ...other } = props;
    const color = variant === 'light' ? '#C1C4D6' : '#5048E5';
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "42",
        height: "42",
        viewBox: "0 0 42 42",
        xmlns: "http://www.w3.org/2000/svg",
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M22.6744 4.50247L31.9038 9.66459C32.117 9.78381 32.2944 9.95738 32.4178 10.1674C32.5413 10.3775 32.6064 10.6164 32.6064 10.8597C32.6064 11.1031 32.5413 11.342 32.4178 11.5521C32.2944 11.7621 32.117 11.9357 31.9038 12.0549L22.6745 17.2172C22.0854 17.5467 21.4212 17.7198 20.7456 17.7198C20.0698 17.7198 19.4056 17.5467 18.8166 17.2172L9.5873 12.0549C9.37415 11.9357 9.1967 11.7621 9.0732 11.5521C8.94971 11.342 8.8846 11.1031 8.8846 10.8597C8.8846 10.6164 8.94971 10.3775 9.0732 10.1674C9.1967 9.95738 9.37415 9.78381 9.5873 9.66459L18.8166 4.50247C19.4056 4.17301 20.0698 4 20.7456 4C21.4212 4 22.0854 4.17301 22.6744 4.50247Z",
                fill: color
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                opacity: "0.7",
                d: "M22.6244 9.34853L35.8422 16.7415C36.0554 16.8607 36.2328 17.0343 36.3563 17.2443C36.4798 17.4544 36.5449 17.6933 36.5449 17.9366C36.5449 18.18 36.4798 18.419 36.3563 18.629C36.2328 18.8391 36.0554 19.0126 35.8422 19.1319L22.6244 26.5248C22.0355 26.8541 21.3712 27.0272 20.6956 27.0272C20.0199 27.0272 19.3557 26.8541 18.7667 26.5248L5.54893 19.1319C5.33578 19.0126 5.15833 18.8391 5.03483 18.629C4.91133 18.419 4.84623 18.18 4.84623 17.9366C4.84623 17.6933 4.91133 17.4544 5.03483 17.2443C5.15833 17.0343 5.33578 16.8607 5.54893 16.7415L18.7667 9.34853C19.3557 9.01916 20.0199 8.84615 20.6956 8.84615C21.3712 8.84615 22.0355 9.01916 22.6244 9.34853Z",
                fill: color
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                opacity: "0.4",
                d: "M22.9257 14.1939L41.2984 24.4703C41.5113 24.5894 41.6884 24.7626 41.8117 24.9724C41.935 25.182 42 25.4206 42 25.6636C42 25.9065 41.935 26.1451 41.8117 26.3548C41.6884 26.5645 41.5113 26.7378 41.2984 26.8568L22.9257 37.1329C22.3377 37.4618 21.6745 37.6346 21 37.6346C20.3254 37.6346 19.6623 37.4618 19.0743 37.1329L0.701542 26.8568C0.488743 26.7378 0.311581 26.5645 0.188286 26.3548C0.0649948 26.1451 0 25.9065 0 25.6636C0 25.4206 0.0649948 25.182 0.188286 24.9724C0.311581 24.7626 0.488743 24.5894 0.701542 24.4703L19.0743 14.1939C19.6623 13.8651 20.3254 13.6923 21 13.6923C21.6745 13.6923 22.3377 13.8651 22.9257 14.1939Z",
                fill: color
            })
        ]
    }));
})``;
Logo.defaultProps = {
    variant: 'primary'
};
Logo.propTypes = {
    variant: external_prop_types_default().oneOf([
        'light',
        'primary'
    ])
};

;// CONCATENATED MODULE: ./src/components/nav-item.js





const NavItem = (props)=>{
    const { href , icon , title , ...others } = props;
    const router = (0,router_.useRouter)();
    const active = href ? router.pathname === href : false;
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
        disableGutters: true,
        sx: {
            display: "flex",
            mb: 0.5,
            py: 0,
            px: 2
        },
        ...others,
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: href,
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                component: "a",
                startIcon: icon,
                disableRipple: true,
                sx: {
                    backgroundColor: active && "rgba(255,255,255, 0.08)",
                    borderRadius: 1,
                    color: active ? "secondary.main" : "neutral.300",
                    fontWeight: active && "fontWeightBold",
                    justifyContent: "flex-start",
                    px: 3,
                    textAlign: "left",
                    textTransform: "none",
                    width: "100%",
                    "& .MuiButton-startIcon": {
                        color: active ? "secondary.main" : "neutral.400"
                    },
                    "&:hover": {
                        backgroundColor: "rgba(255,255,255, 0.08)"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        flexGrow: 1
                    },
                    children: title
                })
            })
        })
    }));
};
NavItem.propTypes = {
    href: (external_prop_types_default()).string,
    icon: (external_prop_types_default()).node,
    title: (external_prop_types_default()).string
};

;// CONCATENATED MODULE: ./src/components/dashboard-sidebar.js










const items = [
    {
        href: "/",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(Users, {
            fontSize: "small"
        }),
        title: "Candidates"
    },
    {
        href: "/account",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(User, {
            fontSize: "small"
        }),
        title: "Account"
    }, 
];
const DashboardSidebar = (props)=>{
    const { open , onClose  } = props;
    const router = (0,router_.useRouter)();
    const lgUp = (0,material_.useMediaQuery)((theme)=>theme.breakpoints.up("lg")
    , {
        defaultMatches: true,
        noSsr: false
    });
    (0,external_react_.useEffect)(()=>{
        if (!router.isReady) {
            return;
        }
        if (open) {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        router.asPath
    ]);
    const content = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            sx: {
                display: "flex",
                flexDirection: "column",
                height: "100%"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            p: 3
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                                    sx: {
                                        height: 42,
                                        width: 42
                                    }
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                    sx: {
                        borderColor: "#2D3748",
                        my: 3
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        flexGrow: 1
                    },
                    children: items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                            icon: item.icon,
                            href: item.href,
                            title: item.title
                        }, item.title)
                    )
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                    sx: {
                        borderColor: "#2D3748"
                    }
                })
            ]
        })
    });
    if (lgUp) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
            anchor: "left",
            open: true,
            PaperProps: {
                sx: {
                    backgroundColor: "neutral.900",
                    color: "#FFFFFF",
                    width: 280
                }
            },
            variant: "permanent",
            children: content
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
        anchor: "left",
        onClose: onClose,
        open: open,
        PaperProps: {
            sx: {
                backgroundColor: "neutral.900",
                color: "#FFFFFF",
                width: 280
            }
        },
        sx: {
            zIndex: (theme)=>theme.zIndex.appBar + 100
        },
        variant: "temporary",
        children: content
    }));
};
DashboardSidebar.propTypes = {
    onClose: (external_prop_types_default()).func,
    open: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./src/components/dashboard-layout.js







const DashboardLayoutRoot = (0,styles_.styled)("div")(({ theme  })=>({
        display: "flex",
        flex: "1 1 auto",
        maxWidth: "100%",
        paddingTop: 64,
        [theme.breakpoints.up("lg")]: {
            paddingLeft: 280
        }
    })
);
const DashboardLayout = (props)=>{
    const { children  } = props;
    const router = (0,router_.useRouter)();
    const { 0: isSidebarOpen , 1: setSidebarOpen  } = (0,external_react_.useState)(true);
    const { 0: token , 1: setToken  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const accessToken = localStorage.getItem("access");
        if (accessToken) {
            setToken(accessToken);
        } else {
            router.push("/login");
        }
    }, [
        token
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: token && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(DashboardLayoutRoot, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            display: "flex",
                            flex: "1 1 auto",
                            flexDirection: "column",
                            width: "100%"
                        },
                        children: children
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(DashboardNavbar, {
                    onSidebarOpen: ()=>setSidebarOpen(true)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(DashboardSidebar, {
                    onClose: ()=>setSidebarOpen(false)
                    ,
                    open: isSidebarOpen
                })
            ]
        })
    }));
};


/***/ }),

/***/ 2342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const BASE_URL = 'https://li-parser.herokuapp.com/api';
class Config {
    static responseUrl = `${BASE_URL}/response/`;
    static registerUrl = `${BASE_URL}/register/`;
    static tokenUrl = `${BASE_URL}/token/`;
    static refreshTokenUrl = `${BASE_URL}/token/refresh/`;
    static indexUrl = `${BASE_URL}/link/`;
    static fileUploadUrl = `${BASE_URL}/upload_file/`;
    static shortlistUrl = `${BASE_URL}/shortlist/`;
    static candidateListToolbarUrl = `${BASE_URL}/link/?`;
    static userUrl = `${BASE_URL}/user/`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Config);


/***/ })

};
;