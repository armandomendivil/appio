import { Dimensions } from 'react-native';

const ThemeColor1 = '#406ab3';
const ThemeColor2 = '#00aef0';
// const ThemeColor3 = '#77a464'

const Constants = {
  API: {
    Address: '',
  },
  Service: {
    url: '',
    consumerKey: '',
    consumerSecret: '',

    wp_api: true,
    version: '',
    timeout: 10, // request timeout
    RootCategoryId: 0,
    Product: {
      Display: {
        ProductThumbnails: { width: 180, height: 216 },
        CatalogImages: { width: 300, height: 360 },
        SingleProductImage: { width: 600, height: 720 },
      },
    },
  },
  Auth0: {
    clientId: '',
    domain: '',
  },
  Firebase: {
    apiKey: '',
    CloudMessage: {
      TOPIC: '',
    },
  },
  PayPal: {
    clientID: '',
    secretKey: '',
    sandBoxMode: true,
  },
  EmitCode: {
      SideMenuOpen: 'sidemenu.open',
      SideMenuClose: 'sidemenu.close',
      ProductPriceChanged: 'product.price.changed',
      SearchModalOpen: 'search.modal.open',
      SearchModalClose: 'search.modal.close',
  },
  AsyncCode: {
      Intro: 'show_intro',
  },
  Dimension: {
      ScreenWidth(percent = 1) {
          return Dimensions.get('window').width * percent
      },
      ScreenHeight(percent = 1) {
          return Dimensions.get('window').height * percent
      },
  },
  Image: {
      Logo: require('./images/logo.png'),
      SplashScreen: require('./images/splash_screen.png'),
  },
  Icon: { //App's icons. Checkout http://fontawesome.io/icons/ for more icons.
      Menu: 'ios-menu',
      Home: 'ios-home',
      Back: 'ios-arrow-back',
      Forward: 'ios-arrow-forward',
      Config: 'ios-settings',
      More: 'ios-more',
      SignIn: 'ios-log-in',
      SignOut: 'ios-log-out',
      ShoppingCart: 'ios-cart',
      ShoppingCartEmpty: 'ios-cart-outline',
      Sort: 'ios-funnel',
      Filter: 'ios-funnel-outline',
      ShowItem: 'ios-arrow-dropright',
      HideItem: 'ios-arrow-dropup',
      ListMode: 'ios-list-box',
      GridMode: 'ios-grid',
      RatingFull: 'ios-star',
      RatingEmpty: 'ios-star-outline',
      Wishlist: 'ios-heart',
      WishlistEmpty: 'ios-heart-outline',
      Delete: 'ios-trash',
      AddToCart: 'ios-cart',
      MyOrder: 'ios-cube',
      News: 'ios-paper',
      Mail: 'ios-mail',
      RatioOff: 'ios-radio-button-off',
      RatioOn: 'ios-radio-button-on',
      Search: 'ios-search',
      Close: 'ios-close',
      HappyFace:'ios-happy-outline',
      SadFace: 'ios-sad-outline',
  },
  Format: {
      Currency: {
          CurrencySymbol: '$',
          IsSymbolPrefix: true, //false for suffix
          ThousandSeparator: ',',
          DecimalSeparator: '.'
      },
      Date: {}
  },
  Color: {
      Background: '#FFFFFF',
      DirtyBackground: '#F0F0F0',
      Error: '#ff0033',

      //Toolbar
      Toolbar: 'white',
      ToolbarText: '#283747',
      ToolbarIcon: '#283747',

      ToolbarTrans: 'transparent',
      ToolbarTextTrans: 'black',
      ToolbarIconTrans: 'black',

      TopBar: 'white',
      TopBarIcon: '#283747',

      //Button
      ButtonBackground: '#00aef0',
      ButtonText: 'white',
      ButtonBorder: '#bcbebb',

      //Product tabs
      TabActive: '#00aef0',
      TabDeActive: 'white',
      TabActiveText: 'white',
      TabDeActiveText: 'black',
      BuyNowButton: '#FF9522',

      ViewBorder: '#bcbebb',

      //Spinner
      Spinner: ThemeColor1,

      //Rating
      Rating: ThemeColor2,

      //Text
      TextNormal: '#77a464',
      TextLight: 'darkgray',
      TextDark: '#000000',
      ProductPrice: ThemeColor2,

      //sidemenu
      SideMenu: '#34BC99',
      SideMenuText: 'white',
      SideMenuIcon: 'white,'
  },
  Font: {
    // ProductName: 'BodoniBold',
    // ProductName: 'SFU Bodoni',
  },
  Style: {
    widthAutoMargin(percent) {
      return {
        width: Dimensions.get('window').width * percent,
        marginLeft: Dimensions.get('window').width * (1 - percent) / 2,
        marginRight: Dimensions.get('window').width * (1 - percent) / 2,
      };
    },
  },
  Drawer: { // Drawer config
    panThreshold: 0.1, // Ratio of screen width that must be travelled to trigger a drawer open/close.
    panOpenMask: 0.04, // The area that listen to open drawer gesture
    panCloseMask: 0.4, // The area that listen to close drawer gesture
    openDrawerOffset: 0.3, // The width of scene when drawer is fully open
    side: 'left', // (left|right) which side the drawer should be on.
  },
  Rating: { // Rating config value
    Size: 20, //Default icon size
  },
};

/*  We can't reference to outer object in constructor,
 *  therefore we need to add those property after Constants was created
 */
Constants.SplashScreen = {
  Duration: 500, // Splash screen display duration (millisecond).
  Image: Constants.Image.SplashScreen,
};

Constants.ProductCard = {
    ListMode: {
        container: {
            width: Constants.Dimension.ScreenWidth(0.9),
            marginLeft: Constants.Dimension.ScreenWidth(0.05),
            marginRight: Constants.Dimension.ScreenWidth(0.1 / 3),
            marginTop: Constants.Dimension.ScreenWidth(0.05),
        },
        image: {
            width: Constants.Dimension.ScreenWidth(0.9) - 2,
            height: 1.2 * Constants.Dimension.ScreenWidth(0.9),
        },
        text: {
            color: 'black',
            fontSize: 16,
            marginLeft: 15,
            marginRight: 15,
        }
    },
    GridMode: {
        container: {
            width: Constants.Dimension.ScreenWidth(0.9) / 2,
            marginLeft: Constants.Dimension.ScreenWidth(0.1 / 3),
            marginRight: 0,
            marginTop: Constants.Dimension.ScreenWidth(0.1 / 3),
        },
        image: {
            width: (Constants.Dimension.ScreenWidth(0.9) / 2) - 2,
            height: 1.2 * (Constants.Dimension.ScreenWidth(0.9) / 2),
        },
        text: {
            fontSize: 14,
            marginLeft: 10,
            marginRight: 10,
        }
    }
}
Constants.Formatter = {
    currency(value) {
        const roundUp = (num, precision = 100) => (Math.ceil(num * precision) / precision)

        return (
            Constants.Format.Currency.IsSymbolPrefix ?
            Constants.Format.Currency.CurrencySymbol + roundUp(value) :
            roundUp(value) + Constants.Format.Currency.CurrencySymbol)
    }
}
Constants.Swiper = {
    swiper_dot: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 4,
        marginRight: 4
    },
    swiper_active_dot: {
        backgroundColor: '#000',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 4,
        marginRight: 4
    },
}
Constants.WooImageFetcher = (uri, containerWidth) => {
  // Enhance number if you want to fetch a better quality image (may affect performance
  const DPI_NUMBER = 1.2;

  // parse uri into parts
  const index = uri.lastIndexOf('.');
  const defaultType = uri.slice(index);
  let editedURI = uri.slice(0, index);

  const SMALL = Constants.Service.Product.Display.ProductThumbnails;
  const MEDIUM = Constants.Service.Product.Display.CatalogImages;
  const LARGE = Constants.Service.Product.Display.SingleProductImage;

  switch (true) {
    case containerWidth * DPI_NUMBER < SMALL.width:
      editedURI = editedURI + '-' + SMALL.width + 'x' + SMALL.height + defaultType
      break
    case containerWidth * DPI_NUMBER < MEDIUM.width:
      editedURI = editedURI + '-' + MEDIUM.width + 'x' + MEDIUM.height + defaultType
      break
    case containerWidth * DPI_NUMBER < LARGE.width:
      editedURI = editedURI + '-' + LARGE.width + 'x' + LARGE.height + defaultType
      break
    default:
      editedURI = editedURI + defaultType
  }
    // console.log(editedURI)
    // return editedURI
    return uri;
}
export default Constants
