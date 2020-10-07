module.exports = {
    src_folders: ['tests'],
    test_settings: {
        default: {
            launch_url: 'https://nightwatchjs.org',
            desiredCapabilities : {
                browserName: 'chrome',
            },
            selenium: {
                port: 4444,
                start_process: true,
                server_path: require('selenium-server').path,
                cli_args: {
                    'webdriver.chrome.driver': require('chromedriver').path,
                }
            }
        },
        'selenium.chrome': {
            extends: 'selenium',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions : {
                    w3c: false
                }
            }
        },
    }
}
