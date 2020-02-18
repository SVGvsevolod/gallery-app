var galleryapp = new nekoapp({
    application: document.querySelector("gallery-app"),
    applicationInfo: {
        nekoappID: "0",
        applicationTitle: "Random Images Gallery App",
        applicationVersion: "1.0.0",
        applicationURL: "//localhost/"
    },
    applicationStylesheets: {
        default: "galleryapp.main.css",
        colors: "galleryapp.colors.css",
        ui: "galleryapp.ui.css"
    },
    applicationClasses: {
        UIButtonBackground: "galleryapp_ui_button_background",
        UIButtonContent: "galleryapp_ui_button_content",
        UIDefaultButton: "galleryapp_ui_default_button",
        UIColorButton: "galleryapp_ui_color_button",
        UIGlassButton: "galleryapp_ui_glass_button",
        UIPaneButton: "galleryapp_ui_pane_button",
        UICircleButton: "galleryapp_ui_circle_button",
        headerContainer: "galleryapp_head_container",
		localeChangeList: "galleryapp_localechange_language_list",
        progressBarInner: "galleryapp_progress_bar_inner",
		localeBoxIcon: "galleryapp_localebox_icon",
		localeBoxText: "galleryapp_localebox_text"
    },
    applicationElements: {
        localizedStringElement: {
            tag: "galleryapp-string",
            prototype: {}
        },
        graphicElement: {
            tag: "galleryapp-ui-graphic",
            prototype: {}
        },
        graphicsLibraryElement: {
            tag: "galleryapp-ui-graphics",
            prototype: {}
        },
        graphicsSetElement: {
            tag: "galleryapp-graphicset",
            prototype: {}
        },
        animationElement: {
            tag: "galleryapp-ui-animation",
            prototype: {}
        },
        animationSpriteElement: {
            tag: "galleryapp-ui-animation-sprite",
            prototype: {}
        },
        UIElement: {
            tag: "galleryapp-ui-element",
            prototype: {}
        },
        buttonElement: {
            tag: "galleryapp-ui-button",
            prototype: {}
        },
        moduleElement: {
            tag: "galleryapp-module",
            prototype: {}
        },
        headerElement: {
            tag: "galleryapp-header",
            prototype: {}
        },
        windowElement: {
            tag: "galleryapp-window",
            prototype: {}
        },
		windowTitle: {
			tag: "galleryapp-window-title",
			prototype: {}
		},
        overlayElement: {
            tag: "galleryapp-overlay",
            prototype: {}
        },
        spinnerElement: {
            tag: "galleryapp-ui-spinner",
            prototype: {}
        },
        loadScreenElement: {
            tag: "galleryapp-loading",
            prototype: {}
        },
        progressBarElement: {
            tag: "galleryapp-progress",
            prototype: {}
        },
        galleryElement: {
            tag: "galleryapp-gallery",
            prototype: {
                addItem: function(item){
                    var gitem = nekoapp.create.object(galleryapp, galleryapp.preferences.elements.galleryItemElement);
                    gitem.children[0].children[0].src=item[0];
                    gitem.children[1].appendChild(nekoapp.create.localizedString(galleryapp,item[1]));
                    this.appendChild(gitem);
                },
                template: undefined
            }
        },
        galleryItemElement: {
            tag: "galleryapp-gallery-item",
            prototype: {
                template: undefined
            }
        },
        galleryHeader: {
            tag: "galleryapp-gallery-header",
            prototype: {}
        },
        galleryHeading1Element: {
            tag: "galleryapp-gallery-heading1",
            prototype: {}
        },
        galleryHeading2Element: {
            tag: "galleryapp-gallery-heading2",
            prototype: {}
        },
        galleryFooter: {
            tag: "galleryapp-gallery-footer",
            prototype: {}
        },
		localeBoxElement: {
			tag: "galleryapp-localebox",
			prototype: {
				init: function(){
					var icon = nekoapp.create.element(galleryapp, "span", {
							class: galleryapp.preferences.classes.localeBoxIcon,
							text: nekoapp.create.graphic(galleryapp, "main;globe_icon", "0 0 20 20")
						}),
						text = nekoapp.create.element(galleryapp, "span", {
							class: galleryapp.preferences.classes.localeBoxText
						}),
						event = new nekoapp.event({
							target: this,
							onclick: function(object, event) {
								nekoapp.locale.openChangeWindow(galleryapp);
							}
						});
					this.appendChild(icon);
					this.appendChild(text);
					event.register();
					this.update();
				},
				update: function(){
					if (this.children.length) {
						this.children[1].innerHTML = galleryapp.localeLanguageStrings[galleryapp.locale.activeLanguage];
					}
				}
			}
		}
    },
    applicationEvents: {
        windowResize: new nekoapp.event({
            target: window,
            onresize: function(event){
                for(var i in galleryapp.screen_modes)
                    if(galleryapp.screen_modes[i][0]>innerWidth&&galleryapp.screen_modes[i][0]!==galleryapp.screen_modes[galleryapp.screen_modes.length-1][0]){
                        galleryapp.app.setAttribute("galleryapp-screen-mode",galleryapp.screen_modes[i-1][0]);
                        galleryapp.app.style.setProperty("--galleryapp-screen-mode",galleryapp.screen_modes[i-1][1]);
                        break;
                    }else{
                        galleryapp.app.setAttribute("galleryapp-screen-mode",galleryapp.screen_modes[i][0]);
                        galleryapp.app.style.setProperty("--galleryapp-screen-mode",galleryapp.screen_modes[i][1]);
                    }
            }
        })
    },
    applicationGraphics: {
        resourceName: "GALLERYAPP_GRAPHICS" ,
        URL: "galleryapp.graphics.html"
    },
    applicationAnimations: {
		UIWaveAnimation : {
			name: "galleryapp_ui_wave_animation" ,
			duration: 300
		},
		CSSVariables: {
			startposX: "--galleryapp-ui-animation-startpos-x" ,
			startposY: "--galleryapp-ui-animation-startpos-y" ,
			width: "--galleryapp-ui-animation-width" ,
			height: "--galleryapp-ui-animation-height"
		}
	},
    applicationModules: {
        gallery_main: {
            moduleID: "gallery_main",
            moduleURL: "/",
            moduleType: "pageModule",
            primaryModule: true,
            moduleData: {
                gallery: undefined
            },
            moduleContents: function(){
                var elements = {
                    header: nekoapp.create.object(galleryapp, galleryapp.preferences.elements.galleryHeader),
                    gallery: nekoapp.create.object(galleryapp, galleryapp.preferences.elements.galleryElement),
                    footer: nekoapp.create.object(galleryapp, galleryapp.preferences.elements.galleryFooter),
                    localebox: nekoapp.create.object(galleryapp, galleryapp.preferences.elements.localeBoxElement)
                };
                elements.header.appendChild(nekoapp.create.object(galleryapp, galleryapp.preferences.elements.galleryHeading1Element, {
                    text: nekoapp.create.localizedString(galleryapp,"headerText1")
                })).parentElement.appendChild(nekoapp.create.object(galleryapp, galleryapp.preferences.elements.galleryHeading2Element, {
                    text: nekoapp.create.localizedString(galleryapp,"headerText2")
                }));
                elements.footer.appendChild(nekoapp.create.element(galleryapp, "div", {
                    class: "galleryapp-footer-powered",
                    text: "Powered by"
                })).appendChild(nekoapp.create.graphic(galleryapp, "main;test_logo", "0 0 222 18", {
                    class: "galleryapp-nekoapp-logo"
                })).parentElement.parentElement.appendChild(nekoapp.create.element(galleryapp, "div", {
                    class: "galleryapp-footer-copyright"
                })).appendChild(elements.localebox).parentElement.appendChild(nekoapp.create.element(galleryapp, "span", {
                    text: "&copy; Copyright S.V.G, 2019"
                }));
                return [elements, [elements.header, elements.gallery, elements.footer]];
            },
            onModuleChange: function(params){
                this.moduleData.gallery=this.instance.random_gallery();
                if(this.moduleContents.gallery.children.length>0){
                    for(var i=0;i<this.moduleContents.gallery.children.length;i++){
                        this.moduleContents.gallery.children[i].children[0].children[0].src=this.moduleData.gallery[i][0];
                        this.moduleContents.gallery.children[i].children[1].children[0].localizedString=this.moduleData.gallery[i][1];
                    }
                }else{
                    for(var i=0;i<this.moduleData.gallery.length;i++)
                        this.moduleContents.gallery.addItem(this.moduleData.gallery[i]);
                }
            },
            onLocaleChange: function(){
                this.moduleContents.localebox.update();
            }
        },
        gallery_header: {
            moduleType: "headerModule",
            headerLayout: {}
        }
    },
    applicationLocalization: {
        "en-US": {
            URL: "locale/en-us.json"
        },
        "ru-RU": {
            URL: "locale/ru-ru.json"
        }
    }
});

galleryapp.preferences.elements.galleryItemElement.prototype.template = nekoapp.create.template(function(){
    var image = nekoapp.create.element(galleryapp, "div", {
            class: "galleryapp-gallery-item-image",
            text: new Image
        }),
        title = nekoapp.create.element(galleryapp, "div", {
            class: "galleryapp-gallery-item-title"
        });
    return [image, title];
});
galleryapp.preferences.events.onInit = new nekoapp.event({
    target: galleryapp,
    oninit: function(){
        galleryapp.preferences.events.windowResize.onresize();
        galleryapp.modules.gallery_main.moduleContents.localebox.init();
    }
});

galleryapp.screen_modes = [[500,1],[850,2],[1280,3],[1920,4],[2560,6],[3840,8]];

nekoapp.system.scripts.add({url: "random_gallery.js"});

nekoapp.system.init(galleryapp);
