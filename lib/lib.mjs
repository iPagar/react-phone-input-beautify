(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("@layer library{._phoneInputNumberInput_6x9yq_2{outline:none;border:none;background:none}._phoneInputNumberInput_6x9yq_2:-webkit-autofill{transition:background-color 5000s ease-in-out 0s}._phoneInputTrigger_6x9yq_10{background:none;border:none}._phoneInputTrigger_6x9yq_10 *{pointer-events:none}._phoneInputDialog_6x9yq_17{display:none;position:absolute;top:0;left:0;overflow:auto;max-height:200px}._phoneInputDialogOpen_6x9yq_25{display:block}._phoneInputDialogPortal_6x9yq_28{position:static}._portal_6x9yq_31{position:absolute;top:0;left:0;z-index:1000}}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
import $e, { useState as X, useEffect as q, useMemo as _a, useRef as Ft, useCallback as kr, forwardRef as Fr, useLayoutEffect as Na } from "react";
import Mr from "react-dom";
const Dr = [
  {
    name: "Andorra",
    state: "assigned",
    alpha2: "AD",
    alpha3: "AND",
    numeric: "020"
  },
  {
    name: "United Arab Emirates",
    state: "assigned",
    alpha2: "AE",
    alpha3: "ARE",
    numeric: "784"
  },
  {
    name: "Afghanistan",
    state: "assigned",
    alpha2: "AF",
    alpha3: "AFG",
    numeric: "004"
  },
  {
    name: "Antigua and Barbuda",
    state: "assigned",
    alpha2: "AG",
    alpha3: "ATG",
    numeric: "028"
  },
  {
    name: "Anguilla",
    state: "assigned",
    alpha2: "AI",
    alpha3: "AIA",
    numeric: "660"
  },
  {
    name: "Albania",
    state: "assigned",
    alpha2: "AL",
    alpha3: "ALB",
    numeric: "008"
  },
  {
    name: "Armenia",
    state: "assigned",
    alpha2: "AM",
    alpha3: "ARM",
    numeric: "051"
  },
  {
    name: "Angola",
    state: "assigned",
    alpha2: "AO",
    alpha3: "AGO",
    numeric: "024"
  },
  {
    name: "Antarctica",
    state: "assigned",
    alpha2: "AQ",
    alpha3: "ATA",
    numeric: "010"
  },
  {
    name: "Argentina",
    state: "assigned",
    alpha2: "AR",
    alpha3: "ARG",
    numeric: "032"
  },
  {
    name: "American Samoa",
    state: "assigned",
    alpha2: "AS",
    alpha3: "ASM",
    numeric: "016"
  },
  {
    name: "Austria",
    state: "assigned",
    alpha2: "AT",
    alpha3: "AUT",
    numeric: "040"
  },
  {
    name: "Australia",
    state: "assigned",
    alpha2: "AU",
    alpha3: "AUS",
    numeric: "036"
  },
  {
    name: "Aruba",
    state: "assigned",
    alpha2: "AW",
    alpha3: "ABW",
    numeric: "533"
  },
  {
    name: "Åland Islands",
    state: "assigned",
    alpha2: "AX",
    alpha3: "ALA",
    numeric: "248"
  },
  {
    name: "Azerbaijan",
    state: "assigned",
    alpha2: "AZ",
    alpha3: "AZE",
    numeric: "031"
  },
  {
    name: "Bosnia and Herzegovina",
    state: "assigned",
    alpha2: "BA",
    alpha3: "BIH",
    numeric: "070"
  },
  {
    name: "Barbados",
    state: "assigned",
    alpha2: "BB",
    alpha3: "BRB",
    numeric: "052"
  },
  {
    name: "Bangladesh",
    state: "assigned",
    alpha2: "BD",
    alpha3: "BGD",
    numeric: "050"
  },
  {
    name: "Belgium",
    state: "assigned",
    alpha2: "BE",
    alpha3: "BEL",
    numeric: "056"
  },
  {
    name: "Burkina Faso",
    state: "assigned",
    alpha2: "BF",
    alpha3: "BFA",
    numeric: "854"
  },
  {
    name: "Bulgaria",
    state: "assigned",
    alpha2: "BG",
    alpha3: "BGR",
    numeric: "100"
  },
  {
    name: "Bahrain",
    state: "assigned",
    alpha2: "BH",
    alpha3: "BHR",
    numeric: "048"
  },
  {
    name: "Burundi",
    state: "assigned",
    alpha2: "BI",
    alpha3: "BDI",
    numeric: "108"
  },
  {
    name: "Benin",
    state: "assigned",
    alpha2: "BJ",
    alpha3: "BEN",
    numeric: "204"
  },
  {
    name: "Saint Barthélemy",
    state: "assigned",
    alpha2: "BL",
    alpha3: "BLM",
    numeric: "652"
  },
  {
    name: "Bermuda",
    state: "assigned",
    alpha2: "BM",
    alpha3: "BMU",
    numeric: "060"
  },
  {
    name: "Brunei Darussalam",
    state: "assigned",
    alpha2: "BN",
    alpha3: "BRN",
    numeric: "096"
  },
  {
    name: "Bolivia (Plurinational State of)",
    state: "assigned",
    alpha2: "BO",
    alpha3: "BOL",
    numeric: "068"
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    state: "assigned",
    alpha2: "BQ",
    alpha3: "BES",
    numeric: "535"
  },
  {
    name: "Brazil",
    state: "assigned",
    alpha2: "BR",
    alpha3: "BRA",
    numeric: "076"
  },
  {
    name: "Bahamas",
    state: "assigned",
    alpha2: "BS",
    alpha3: "BHS",
    numeric: "044"
  },
  {
    name: "Bhutan",
    state: "assigned",
    alpha2: "BT",
    alpha3: "BTN",
    numeric: "064"
  },
  {
    name: "Bouvet Island",
    state: "assigned",
    alpha2: "BV",
    alpha3: "BVT",
    numeric: "074"
  },
  {
    name: "Botswana",
    state: "assigned",
    alpha2: "BW",
    alpha3: "BWA",
    numeric: "072"
  },
  {
    name: "Belarus",
    state: "assigned",
    alpha2: "BY",
    alpha3: "BLR",
    numeric: "112"
  },
  {
    name: "Belize",
    state: "assigned",
    alpha2: "BZ",
    alpha3: "BLZ",
    numeric: "084"
  },
  {
    name: "Canada",
    state: "assigned",
    alpha2: "CA",
    alpha3: "CAN",
    numeric: "124"
  },
  {
    name: "Cocos (Keeling) Islands",
    state: "assigned",
    alpha2: "CC",
    alpha3: "CCK",
    numeric: "166"
  },
  {
    name: "Congo, Democratic Republic of the",
    state: "assigned",
    alpha2: "CD",
    alpha3: "COD",
    numeric: "180"
  },
  {
    name: "Central African Republic",
    state: "assigned",
    alpha2: "CF",
    alpha3: "CAF",
    numeric: "140"
  },
  {
    name: "Congo",
    state: "assigned",
    alpha2: "CG",
    alpha3: "COG",
    numeric: "178"
  },
  {
    name: "Switzerland",
    state: "assigned",
    alpha2: "CH",
    alpha3: "CHE",
    numeric: "756"
  },
  {
    name: "Côte d'Ivoire",
    state: "assigned",
    alpha2: "CI",
    alpha3: "CIV",
    numeric: "384"
  },
  {
    name: "Cook Islands",
    state: "assigned",
    alpha2: "CK",
    alpha3: "COK",
    numeric: "184"
  },
  {
    name: "Chile",
    state: "assigned",
    alpha2: "CL",
    alpha3: "CHL",
    numeric: "152"
  },
  {
    name: "Cameroon",
    state: "assigned",
    alpha2: "CM",
    alpha3: "CMR",
    numeric: "120"
  },
  {
    name: "China",
    state: "assigned",
    alpha2: "CN",
    alpha3: "CHN",
    numeric: "156"
  },
  {
    name: "Colombia",
    state: "assigned",
    alpha2: "CO",
    alpha3: "COL",
    numeric: "170"
  },
  {
    name: "Costa Rica",
    state: "assigned",
    alpha2: "CR",
    alpha3: "CRI",
    numeric: "188"
  },
  {
    name: "Cuba",
    state: "assigned",
    alpha2: "CU",
    alpha3: "CUB",
    numeric: "192"
  },
  {
    name: "Cabo Verde",
    state: "assigned",
    alpha2: "CV",
    alpha3: "CPV",
    numeric: "132"
  },
  {
    name: "Curaçao",
    state: "assigned",
    alpha2: "CW",
    alpha3: "CUW",
    numeric: "531"
  },
  {
    name: "Christmas Island",
    state: "assigned",
    alpha2: "CX",
    alpha3: "CXR",
    numeric: "162"
  },
  {
    name: "Cyprus",
    state: "assigned",
    alpha2: "CY",
    alpha3: "CYP",
    numeric: "196"
  },
  {
    name: "Czechia",
    state: "assigned",
    alpha2: "CZ",
    alpha3: "CZE",
    numeric: "203"
  },
  {
    name: "Germany",
    state: "assigned",
    alpha2: "DE",
    alpha3: "DEU",
    numeric: "276"
  },
  {
    name: "Djibouti",
    state: "assigned",
    alpha2: "DJ",
    alpha3: "DJI",
    numeric: "262"
  },
  {
    name: "Denmark",
    state: "assigned",
    alpha2: "DK",
    alpha3: "DNK",
    numeric: "208"
  },
  {
    name: "Dominica",
    state: "assigned",
    alpha2: "DM",
    alpha3: "DMA",
    numeric: "212"
  },
  {
    name: "Dominican Republic",
    state: "assigned",
    alpha2: "DO",
    alpha3: "DOM",
    numeric: "214"
  },
  {
    name: "Algeria",
    state: "assigned",
    alpha2: "DZ",
    alpha3: "DZA",
    numeric: "012"
  },
  {
    name: "Ecuador",
    state: "assigned",
    alpha2: "EC",
    alpha3: "ECU",
    numeric: "218"
  },
  {
    name: "Estonia",
    state: "assigned",
    alpha2: "EE",
    alpha3: "EST",
    numeric: "233"
  },
  {
    name: "Egypt",
    state: "assigned",
    alpha2: "EG",
    alpha3: "EGY",
    numeric: "818"
  },
  {
    name: "Western Sahara",
    state: "assigned",
    alpha2: "EH",
    alpha3: "ESH",
    numeric: "732"
  },
  {
    name: "Eritrea",
    state: "assigned",
    alpha2: "ER",
    alpha3: "ERI",
    numeric: "232"
  },
  {
    name: "Spain",
    state: "assigned",
    alpha2: "ES",
    alpha3: "ESP",
    numeric: "724"
  },
  {
    name: "Ethiopia",
    state: "assigned",
    alpha2: "ET",
    alpha3: "ETH",
    numeric: "231"
  },
  {
    name: "Finland",
    state: "assigned",
    alpha2: "FI",
    alpha3: "FIN",
    numeric: "246"
  },
  {
    name: "Fiji",
    state: "assigned",
    alpha2: "FJ",
    alpha3: "FJI",
    numeric: "242"
  },
  {
    name: "Falkland Islands (Malvinas)",
    state: "assigned",
    alpha2: "FK",
    alpha3: "FLK",
    numeric: "238"
  },
  {
    name: "Micronesia (Federated States of)",
    state: "assigned",
    alpha2: "FM",
    alpha3: "FSM",
    numeric: "583"
  },
  {
    name: "Faroe Islands",
    state: "assigned",
    alpha2: "FO",
    alpha3: "FRO",
    numeric: "234"
  },
  {
    name: "France",
    state: "assigned",
    alpha2: "FR",
    alpha3: "FRA",
    numeric: "250"
  },
  {
    name: "Gabon",
    state: "assigned",
    alpha2: "GA",
    alpha3: "GAB",
    numeric: "266"
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    state: "assigned",
    alpha2: "GB",
    alpha3: "GBR",
    numeric: "826"
  },
  {
    name: "Grenada",
    state: "assigned",
    alpha2: "GD",
    alpha3: "GRD",
    numeric: "308"
  },
  {
    name: "Georgia",
    state: "assigned",
    alpha2: "GE",
    alpha3: "GEO",
    numeric: "268"
  },
  {
    name: "French Guiana",
    state: "assigned",
    alpha2: "GF",
    alpha3: "GUF",
    numeric: "254"
  },
  {
    name: "Guernsey",
    state: "assigned",
    alpha2: "GG",
    alpha3: "GGY",
    numeric: "831"
  },
  {
    name: "Ghana",
    state: "assigned",
    alpha2: "GH",
    alpha3: "GHA",
    numeric: "288"
  },
  {
    name: "Gibraltar",
    state: "assigned",
    alpha2: "GI",
    alpha3: "GIB",
    numeric: "292"
  },
  {
    name: "Greenland",
    state: "assigned",
    alpha2: "GL",
    alpha3: "GRL",
    numeric: "304"
  },
  {
    name: "Gambia",
    state: "assigned",
    alpha2: "GM",
    alpha3: "GMB",
    numeric: "270"
  },
  {
    name: "Guinea",
    state: "assigned",
    alpha2: "GN",
    alpha3: "GIN",
    numeric: "324"
  },
  {
    name: "Guadeloupe",
    state: "assigned",
    alpha2: "GP",
    alpha3: "GLP",
    numeric: "312"
  },
  {
    name: "Equatorial Guinea",
    state: "assigned",
    alpha2: "GQ",
    alpha3: "GNQ",
    numeric: "226"
  },
  {
    name: "Greece",
    state: "assigned",
    alpha2: "GR",
    alpha3: "GRC",
    numeric: "300"
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    state: "assigned",
    alpha2: "GS",
    alpha3: "SGS",
    numeric: "239"
  },
  {
    name: "Guatemala",
    state: "assigned",
    alpha2: "GT",
    alpha3: "GTM",
    numeric: "320"
  },
  {
    name: "Guam",
    state: "assigned",
    alpha2: "GU",
    alpha3: "GUM",
    numeric: "316"
  },
  {
    name: "Guinea-Bissau",
    state: "assigned",
    alpha2: "GW",
    alpha3: "GNB",
    numeric: "624"
  },
  {
    name: "Guyana",
    state: "assigned",
    alpha2: "GY",
    alpha3: "GUY",
    numeric: "328"
  },
  {
    name: "Hong Kong",
    state: "assigned",
    alpha2: "HK",
    alpha3: "HKG",
    numeric: "344"
  },
  {
    name: "Heard Island and McDonald Islands",
    state: "assigned",
    alpha2: "HM",
    alpha3: "HMD",
    numeric: "334"
  },
  {
    name: "Honduras",
    state: "assigned",
    alpha2: "HN",
    alpha3: "HND",
    numeric: "340"
  },
  {
    name: "Croatia",
    state: "assigned",
    alpha2: "HR",
    alpha3: "HRV",
    numeric: "191"
  },
  {
    name: "Haiti",
    state: "assigned",
    alpha2: "HT",
    alpha3: "HTI",
    numeric: "332"
  },
  {
    name: "Hungary",
    state: "assigned",
    alpha2: "HU",
    alpha3: "HUN",
    numeric: "348"
  },
  {
    name: "Indonesia",
    state: "assigned",
    alpha2: "ID",
    alpha3: "IDN",
    numeric: "360"
  },
  {
    name: "Ireland",
    state: "assigned",
    alpha2: "IE",
    alpha3: "IRL",
    numeric: "372"
  },
  {
    name: "Israel",
    state: "assigned",
    alpha2: "IL",
    alpha3: "ISR",
    numeric: "376"
  },
  {
    name: "Isle of Man",
    state: "assigned",
    alpha2: "IM",
    alpha3: "IMN",
    numeric: "833"
  },
  {
    name: "India",
    state: "assigned",
    alpha2: "IN",
    alpha3: "IND",
    numeric: "356"
  },
  {
    name: "British Indian Ocean Territory",
    state: "assigned",
    alpha2: "IO",
    alpha3: "IOT",
    numeric: "086"
  },
  {
    name: "Iraq",
    state: "assigned",
    alpha2: "IQ",
    alpha3: "IRQ",
    numeric: "368"
  },
  {
    name: "Iran (Islamic Republic of)",
    state: "assigned",
    alpha2: "IR",
    alpha3: "IRN",
    numeric: "364"
  },
  {
    name: "Iceland",
    state: "assigned",
    alpha2: "IS",
    alpha3: "ISL",
    numeric: "352"
  },
  {
    name: "Italy",
    state: "assigned",
    alpha2: "IT",
    alpha3: "ITA",
    numeric: "380"
  },
  {
    name: "Jersey",
    state: "assigned",
    alpha2: "JE",
    alpha3: "JEY",
    numeric: "832"
  },
  {
    name: "Jamaica",
    state: "assigned",
    alpha2: "JM",
    alpha3: "JAM",
    numeric: "388"
  },
  {
    name: "Jordan",
    state: "assigned",
    alpha2: "JO",
    alpha3: "JOR",
    numeric: "400"
  },
  {
    name: "Japan",
    state: "assigned",
    alpha2: "JP",
    alpha3: "JPN",
    numeric: "392"
  },
  {
    name: "Kenya",
    state: "assigned",
    alpha2: "KE",
    alpha3: "KEN",
    numeric: "404"
  },
  {
    name: "Kyrgyzstan",
    state: "assigned",
    alpha2: "KG",
    alpha3: "KGZ",
    numeric: "417"
  },
  {
    name: "Cambodia",
    state: "assigned",
    alpha2: "KH",
    alpha3: "KHM",
    numeric: "116"
  },
  {
    name: "Kiribati",
    state: "assigned",
    alpha2: "KI",
    alpha3: "KIR",
    numeric: "296"
  },
  {
    name: "Comoros",
    state: "assigned",
    alpha2: "KM",
    alpha3: "COM",
    numeric: "174"
  },
  {
    name: "Saint Kitts and Nevis",
    state: "assigned",
    alpha2: "KN",
    alpha3: "KNA",
    numeric: "659"
  },
  {
    name: "Korea (Democratic People's Republic of)",
    state: "assigned",
    alpha2: "KP",
    alpha3: "PRK",
    numeric: "408"
  },
  {
    name: "Korea, Republic of",
    state: "assigned",
    alpha2: "KR",
    alpha3: "KOR",
    numeric: "410"
  },
  {
    name: "Kuwait",
    state: "assigned",
    alpha2: "KW",
    alpha3: "KWT",
    numeric: "414"
  },
  {
    name: "Cayman Islands",
    state: "assigned",
    alpha2: "KY",
    alpha3: "CYM",
    numeric: "136"
  },
  {
    name: "Kazakhstan",
    state: "assigned",
    alpha2: "KZ",
    alpha3: "KAZ",
    numeric: "398"
  },
  {
    name: "Lao People's Democratic Republic",
    state: "assigned",
    alpha2: "LA",
    alpha3: "LAO",
    numeric: "418"
  },
  {
    name: "Lebanon",
    state: "assigned",
    alpha2: "LB",
    alpha3: "LBN",
    numeric: "422"
  },
  {
    name: "Saint Lucia",
    state: "assigned",
    alpha2: "LC",
    alpha3: "LCA",
    numeric: "662"
  },
  {
    name: "Liechtenstein",
    state: "assigned",
    alpha2: "LI",
    alpha3: "LIE",
    numeric: "438"
  },
  {
    name: "Sri Lanka",
    state: "assigned",
    alpha2: "LK",
    alpha3: "LKA",
    numeric: "144"
  },
  {
    name: "Liberia",
    state: "assigned",
    alpha2: "LR",
    alpha3: "LBR",
    numeric: "430"
  },
  {
    name: "Lesotho",
    state: "assigned",
    alpha2: "LS",
    alpha3: "LSO",
    numeric: "426"
  },
  {
    name: "Lithuania",
    state: "assigned",
    alpha2: "LT",
    alpha3: "LTU",
    numeric: "440"
  },
  {
    name: "Luxembourg",
    state: "assigned",
    alpha2: "LU",
    alpha3: "LUX",
    numeric: "442"
  },
  {
    name: "Latvia",
    state: "assigned",
    alpha2: "LV",
    alpha3: "LVA",
    numeric: "428"
  },
  {
    name: "Libya",
    state: "assigned",
    alpha2: "LY",
    alpha3: "LBY",
    numeric: "434"
  },
  {
    name: "Morocco",
    state: "assigned",
    alpha2: "MA",
    alpha3: "MAR",
    numeric: "504"
  },
  {
    name: "Monaco",
    state: "assigned",
    alpha2: "MC",
    alpha3: "MCO",
    numeric: "492"
  },
  {
    name: "Moldova, Republic of",
    state: "assigned",
    alpha2: "MD",
    alpha3: "MDA",
    numeric: "498"
  },
  {
    name: "Montenegro",
    state: "assigned",
    alpha2: "ME",
    alpha3: "MNE",
    numeric: "499"
  },
  {
    name: "Saint Martin (French part)",
    state: "assigned",
    alpha2: "MF",
    alpha3: "MAF",
    numeric: "663"
  },
  {
    name: "Madagascar",
    state: "assigned",
    alpha2: "MG",
    alpha3: "MDG",
    numeric: "450"
  },
  {
    name: "Marshall Islands",
    state: "assigned",
    alpha2: "MH",
    alpha3: "MHL",
    numeric: "584"
  },
  {
    name: "North Macedonia",
    state: "assigned",
    alpha2: "MK",
    alpha3: "MKD",
    numeric: "807"
  },
  {
    name: "Mali",
    state: "assigned",
    alpha2: "ML",
    alpha3: "MLI",
    numeric: "466"
  },
  {
    name: "Myanmar",
    state: "assigned",
    alpha2: "MM",
    alpha3: "MMR",
    numeric: "104"
  },
  {
    name: "Mongolia",
    state: "assigned",
    alpha2: "MN",
    alpha3: "MNG",
    numeric: "496"
  },
  {
    name: "Macao",
    state: "assigned",
    alpha2: "MO",
    alpha3: "MAC",
    numeric: "446"
  },
  {
    name: "Northern Mariana Islands",
    state: "assigned",
    alpha2: "MP",
    alpha3: "MNP",
    numeric: "580"
  },
  {
    name: "Martinique",
    state: "assigned",
    alpha2: "MQ",
    alpha3: "MTQ",
    numeric: "474"
  },
  {
    name: "Mauritania",
    state: "assigned",
    alpha2: "MR",
    alpha3: "MRT",
    numeric: "478"
  },
  {
    name: "Montserrat",
    state: "assigned",
    alpha2: "MS",
    alpha3: "MSR",
    numeric: "500"
  },
  {
    name: "Malta",
    state: "assigned",
    alpha2: "MT",
    alpha3: "MLT",
    numeric: "470"
  },
  {
    name: "Mauritius",
    state: "assigned",
    alpha2: "MU",
    alpha3: "MUS",
    numeric: "480"
  },
  {
    name: "Maldives",
    state: "assigned",
    alpha2: "MV",
    alpha3: "MDV",
    numeric: "462"
  },
  {
    name: "Malawi",
    state: "assigned",
    alpha2: "MW",
    alpha3: "MWI",
    numeric: "454"
  },
  {
    name: "Mexico",
    state: "assigned",
    alpha2: "MX",
    alpha3: "MEX",
    numeric: "484"
  },
  {
    name: "Malaysia",
    state: "assigned",
    alpha2: "MY",
    alpha3: "MYS",
    numeric: "458"
  },
  {
    name: "Mozambique",
    state: "assigned",
    alpha2: "MZ",
    alpha3: "MOZ",
    numeric: "508"
  },
  {
    name: "Namibia",
    state: "assigned",
    alpha2: "NA",
    alpha3: "NAM",
    numeric: "516"
  },
  {
    name: "New Caledonia",
    state: "assigned",
    alpha2: "NC",
    alpha3: "NCL",
    numeric: "540"
  },
  {
    name: "Niger",
    state: "assigned",
    alpha2: "NE",
    alpha3: "NER",
    numeric: "562"
  },
  {
    name: "Norfolk Island",
    state: "assigned",
    alpha2: "NF",
    alpha3: "NFK",
    numeric: "574"
  },
  {
    name: "Nigeria",
    state: "assigned",
    alpha2: "NG",
    alpha3: "NGA",
    numeric: "566"
  },
  {
    name: "Nicaragua",
    state: "assigned",
    alpha2: "NI",
    alpha3: "NIC",
    numeric: "558"
  },
  {
    name: "Netherlands, Kingdom of the",
    state: "assigned",
    alpha2: "NL",
    alpha3: "NLD",
    numeric: "528"
  },
  {
    name: "Norway",
    state: "assigned",
    alpha2: "NO",
    alpha3: "NOR",
    numeric: "578"
  },
  {
    name: "Nepal",
    state: "assigned",
    alpha2: "NP",
    alpha3: "NPL",
    numeric: "524"
  },
  {
    name: "Nauru",
    state: "assigned",
    alpha2: "NR",
    alpha3: "NRU",
    numeric: "520"
  },
  {
    name: "Niue",
    state: "assigned",
    alpha2: "NU",
    alpha3: "NIU",
    numeric: "570"
  },
  {
    name: "New Zealand",
    state: "assigned",
    alpha2: "NZ",
    alpha3: "NZL",
    numeric: "554"
  },
  {
    name: "Oman",
    state: "assigned",
    alpha2: "OM",
    alpha3: "OMN",
    numeric: "512"
  },
  {
    name: "Panama",
    state: "assigned",
    alpha2: "PA",
    alpha3: "PAN",
    numeric: "591"
  },
  {
    name: "Peru",
    state: "assigned",
    alpha2: "PE",
    alpha3: "PER",
    numeric: "604"
  },
  {
    name: "French Polynesia",
    state: "assigned",
    alpha2: "PF",
    alpha3: "PYF",
    numeric: "258"
  },
  {
    name: "Papua New Guinea",
    state: "assigned",
    alpha2: "PG",
    alpha3: "PNG",
    numeric: "598"
  },
  {
    name: "Philippines",
    state: "assigned",
    alpha2: "PH",
    alpha3: "PHL",
    numeric: "608"
  },
  {
    name: "Pakistan",
    state: "assigned",
    alpha2: "PK",
    alpha3: "PAK",
    numeric: "586"
  },
  {
    name: "Poland",
    state: "assigned",
    alpha2: "PL",
    alpha3: "POL",
    numeric: "616"
  },
  {
    name: "Saint Pierre and Miquelon",
    state: "assigned",
    alpha2: "PM",
    alpha3: "SPM",
    numeric: "666"
  },
  {
    name: "Pitcairn",
    state: "assigned",
    alpha2: "PN",
    alpha3: "PCN",
    numeric: "612"
  },
  {
    name: "Puerto Rico",
    state: "assigned",
    alpha2: "PR",
    alpha3: "PRI",
    numeric: "630"
  },
  {
    name: "Palestine, State of",
    state: "assigned",
    alpha2: "PS",
    alpha3: "PSE",
    numeric: "275"
  },
  {
    name: "Portugal",
    state: "assigned",
    alpha2: "PT",
    alpha3: "PRT",
    numeric: "620"
  },
  {
    name: "Palau",
    state: "assigned",
    alpha2: "PW",
    alpha3: "PLW",
    numeric: "585"
  },
  {
    name: "Paraguay",
    state: "assigned",
    alpha2: "PY",
    alpha3: "PRY",
    numeric: "600"
  },
  {
    name: "Qatar",
    state: "assigned",
    alpha2: "QA",
    alpha3: "QAT",
    numeric: "634"
  },
  {
    name: "Réunion",
    state: "assigned",
    alpha2: "RE",
    alpha3: "REU",
    numeric: "638"
  },
  {
    name: "Romania",
    state: "assigned",
    alpha2: "RO",
    alpha3: "ROU",
    numeric: "642"
  },
  {
    name: "Serbia",
    state: "assigned",
    alpha2: "RS",
    alpha3: "SRB",
    numeric: "688"
  },
  {
    name: "Russian Federation",
    state: "assigned",
    alpha2: "RU",
    alpha3: "RUS",
    numeric: "643"
  },
  {
    name: "Rwanda",
    state: "assigned",
    alpha2: "RW",
    alpha3: "RWA",
    numeric: "646"
  },
  {
    name: "Saudi Arabia",
    state: "assigned",
    alpha2: "SA",
    alpha3: "SAU",
    numeric: "682"
  },
  {
    name: "Solomon Islands",
    state: "assigned",
    alpha2: "SB",
    alpha3: "SLB",
    numeric: "090"
  },
  {
    name: "Seychelles",
    state: "assigned",
    alpha2: "SC",
    alpha3: "SYC",
    numeric: "690"
  },
  {
    name: "Sudan",
    state: "assigned",
    alpha2: "SD",
    alpha3: "SDN",
    numeric: "729"
  },
  {
    name: "Sweden",
    state: "assigned",
    alpha2: "SE",
    alpha3: "SWE",
    numeric: "752"
  },
  {
    name: "Singapore",
    state: "assigned",
    alpha2: "SG",
    alpha3: "SGP",
    numeric: "702"
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    state: "assigned",
    alpha2: "SH",
    alpha3: "SHN",
    numeric: "654"
  },
  {
    name: "Slovenia",
    state: "assigned",
    alpha2: "SI",
    alpha3: "SVN",
    numeric: "705"
  },
  {
    name: "Svalbard and Jan Mayen",
    state: "assigned",
    alpha2: "SJ",
    alpha3: "SJM",
    numeric: "744"
  },
  {
    name: "Slovakia",
    state: "assigned",
    alpha2: "SK",
    alpha3: "SVK",
    numeric: "703"
  },
  {
    name: "Sierra Leone",
    state: "assigned",
    alpha2: "SL",
    alpha3: "SLE",
    numeric: "694"
  },
  {
    name: "San Marino",
    state: "assigned",
    alpha2: "SM",
    alpha3: "SMR",
    numeric: "674"
  },
  {
    name: "Senegal",
    state: "assigned",
    alpha2: "SN",
    alpha3: "SEN",
    numeric: "686"
  },
  {
    name: "Somalia",
    state: "assigned",
    alpha2: "SO",
    alpha3: "SOM",
    numeric: "706"
  },
  {
    name: "Suriname",
    state: "assigned",
    alpha2: "SR",
    alpha3: "SUR",
    numeric: "740"
  },
  {
    name: "South Sudan",
    state: "assigned",
    alpha2: "SS",
    alpha3: "SSD",
    numeric: "728"
  },
  {
    name: "Sao Tome and Principe",
    state: "assigned",
    alpha2: "ST",
    alpha3: "STP",
    numeric: "678"
  },
  {
    name: "El Salvador",
    state: "assigned",
    alpha2: "SV",
    alpha3: "SLV",
    numeric: "222"
  },
  {
    name: "Sint Maarten (Dutch part)",
    state: "assigned",
    alpha2: "SX",
    alpha3: "SXM",
    numeric: "534"
  },
  {
    name: "Syrian Arab Republic",
    state: "assigned",
    alpha2: "SY",
    alpha3: "SYR",
    numeric: "760"
  },
  {
    name: "Eswatini",
    state: "assigned",
    alpha2: "SZ",
    alpha3: "SWZ",
    numeric: "748"
  },
  {
    name: "Turks and Caicos Islands",
    state: "assigned",
    alpha2: "TC",
    alpha3: "TCA",
    numeric: "796"
  },
  {
    name: "Chad",
    state: "assigned",
    alpha2: "TD",
    alpha3: "TCD",
    numeric: "148"
  },
  {
    name: "French Southern Territories",
    state: "assigned",
    alpha2: "TF",
    alpha3: "ATF",
    numeric: "260"
  },
  {
    name: "Togo",
    state: "assigned",
    alpha2: "TG",
    alpha3: "TGO",
    numeric: "768"
  },
  {
    name: "Thailand",
    state: "assigned",
    alpha2: "TH",
    alpha3: "THA",
    numeric: "764"
  },
  {
    name: "Tajikistan",
    state: "assigned",
    alpha2: "TJ",
    alpha3: "TJK",
    numeric: "762"
  },
  {
    name: "Tokelau",
    state: "assigned",
    alpha2: "TK",
    alpha3: "TKL",
    numeric: "772"
  },
  {
    name: "Timor-Leste",
    state: "assigned",
    alpha2: "TL",
    alpha3: "TLS",
    numeric: "626"
  },
  {
    name: "Turkmenistan",
    state: "assigned",
    alpha2: "TM",
    alpha3: "TKM",
    numeric: "795"
  },
  {
    name: "Tunisia",
    state: "assigned",
    alpha2: "TN",
    alpha3: "TUN",
    numeric: "788"
  },
  {
    name: "Tonga",
    state: "assigned",
    alpha2: "TO",
    alpha3: "TON",
    numeric: "776"
  },
  {
    name: "Türkiye",
    state: "assigned",
    alpha2: "TR",
    alpha3: "TUR",
    numeric: "792"
  },
  {
    name: "Trinidad and Tobago",
    state: "assigned",
    alpha2: "TT",
    alpha3: "TTO",
    numeric: "780"
  },
  {
    name: "Tuvalu",
    state: "assigned",
    alpha2: "TV",
    alpha3: "TUV",
    numeric: "798"
  },
  {
    name: "Taiwan, Province of China",
    state: "assigned",
    alpha2: "TW",
    alpha3: "TWN",
    numeric: "158"
  },
  {
    name: "Tanzania, United Republic of",
    state: "assigned",
    alpha2: "TZ",
    alpha3: "TZA",
    numeric: "834"
  },
  {
    name: "Ukraine",
    state: "assigned",
    alpha2: "UA",
    alpha3: "UKR",
    numeric: "804"
  },
  {
    name: "Uganda",
    state: "assigned",
    alpha2: "UG",
    alpha3: "UGA",
    numeric: "800"
  },
  {
    name: "United States Minor Outlying Islands",
    state: "assigned",
    alpha2: "UM",
    alpha3: "UMI",
    numeric: "581"
  },
  {
    name: "United States of America",
    state: "assigned",
    alpha2: "US",
    alpha3: "USA",
    numeric: "840"
  },
  {
    name: "Uruguay",
    state: "assigned",
    alpha2: "UY",
    alpha3: "URY",
    numeric: "858"
  },
  {
    name: "Uzbekistan",
    state: "assigned",
    alpha2: "UZ",
    alpha3: "UZB",
    numeric: "860"
  },
  {
    name: "Holy See",
    state: "assigned",
    alpha2: "VA",
    alpha3: "VAT",
    numeric: "336"
  },
  {
    name: "Saint Vincent and the Grenadines",
    state: "assigned",
    alpha2: "VC",
    alpha3: "VCT",
    numeric: "670"
  },
  {
    name: "Venezuela (Bolivarian Republic of)",
    state: "assigned",
    alpha2: "VE",
    alpha3: "VEN",
    numeric: "862"
  },
  {
    name: "Virgin Islands (British)",
    state: "assigned",
    alpha2: "VG",
    alpha3: "VGB",
    numeric: "092"
  },
  {
    name: "Virgin Islands (U.S.)",
    state: "assigned",
    alpha2: "VI",
    alpha3: "VIR",
    numeric: "850"
  },
  {
    name: "Viet Nam",
    state: "assigned",
    alpha2: "VN",
    alpha3: "VNM",
    numeric: "704"
  },
  {
    name: "Vanuatu",
    state: "assigned",
    alpha2: "VU",
    alpha3: "VUT",
    numeric: "548"
  },
  {
    name: "Wallis and Futuna",
    state: "assigned",
    alpha2: "WF",
    alpha3: "WLF",
    numeric: "876"
  },
  {
    name: "Samoa",
    state: "assigned",
    alpha2: "WS",
    alpha3: "WSM",
    numeric: "882"
  },
  {
    name: "Yemen",
    state: "assigned",
    alpha2: "YE",
    alpha3: "YEM",
    numeric: "887"
  },
  {
    name: "Mayotte",
    state: "assigned",
    alpha2: "YT",
    alpha3: "MYT",
    numeric: "175"
  },
  {
    name: "South Africa",
    state: "assigned",
    alpha2: "ZA",
    alpha3: "ZAF",
    numeric: "710"
  },
  {
    name: "Zambia",
    state: "assigned",
    alpha2: "ZM",
    alpha3: "ZMB",
    numeric: "894"
  },
  {
    name: "Zimbabwe",
    state: "assigned",
    alpha2: "ZW",
    alpha3: "ZWE",
    numeric: "716"
  }
], Ca = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]], BL: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:1[3-79]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-79])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|8(?:0[89]|92)", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-2]|5[01]|8[0-3]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "1(?:(?:[27]2|44|87|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-69]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[047]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "2[0-24-9]\\d{8}|[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-8]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:5056(?:[0-35-9]\\d|4[468])|7302[01]\\d)\\d{4}|(?:472[24]|505[2-57-9]|983[289])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[0149]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "810", "(?:20|33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|5[0-4]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function Xt(n, e) {
  var t = Array.prototype.slice.call(e);
  return t.push(Ca), n.apply(this, t);
}
function Mt(n) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mt(n);
}
function xn(n, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a);
  }
}
function Lr(n, e, t) {
  return e && xn(n.prototype, e), t && xn(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function jr(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Br(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && Ae(n, e);
}
function Gr(n) {
  var e = xa();
  return function() {
    var a = Re(n), r;
    if (e) {
      var i = Re(this).constructor;
      r = Reflect.construct(a, arguments, i);
    } else
      r = a.apply(this, arguments);
    return Ur(this, r);
  };
}
function Ur(n, e) {
  if (e && (Mt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Pa(n);
}
function Pa(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Dt(n) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Dt = function(a) {
    if (a === null || !Zr(a))
      return a;
    if (typeof a != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(a))
        return e.get(a);
      e.set(a, r);
    }
    function r() {
      return Qe(a, arguments, Re(this).constructor);
    }
    return r.prototype = Object.create(a.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), Ae(r, a);
  }, Dt(n);
}
function Qe(n, e, t) {
  return xa() ? Qe = Reflect.construct : Qe = function(r, i, d) {
    var s = [null];
    s.push.apply(s, i);
    var u = Function.bind.apply(r, s), l = new u();
    return d && Ae(l, d.prototype), l;
  }, Qe.apply(null, arguments);
}
function xa() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Zr(n) {
  return Function.toString.call(n).indexOf("[native code]") !== -1;
}
function Ae(n, e) {
  return Ae = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Ae(n, e);
}
function Re(n) {
  return Re = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Re(n);
}
var ae = /* @__PURE__ */ function(n) {
  Br(t, n);
  var e = Gr(t);
  function t(a) {
    var r;
    return jr(this, t), r = e.call(this, a), Object.setPrototypeOf(Pa(r), t.prototype), r.name = r.constructor.name, r;
  }
  return Lr(t);
}(/* @__PURE__ */ Dt(Error)), qt = 2, Vr = 17, Hr = 3, G = "0-9０-９٠-٩۰-۹", Wr = "-‐-―−ー－", Kr = "／/", Yr = "．.", zr = "  ­​⁠　", Jr = "()（）［］\\[\\]", Xr = "~⁓∼～", K = "".concat(Wr).concat(Kr).concat(Yr).concat(zr).concat(Jr).concat(Xr), $t = "+＋";
function Tn(n, e) {
  n = n.split("-"), e = e.split("-");
  for (var t = n[0].split("."), a = e[0].split("."), r = 0; r < 3; r++) {
    var i = Number(t[r]), d = Number(a[r]);
    if (i > d)
      return 1;
    if (d > i)
      return -1;
    if (!isNaN(i) && isNaN(d))
      return 1;
    if (isNaN(i) && !isNaN(d))
      return -1;
  }
  return n[1] && e[1] ? n[1] > e[1] ? 1 : n[1] < e[1] ? -1 : 0 : !n[1] && e[1] ? 1 : n[1] && !e[1] ? -1 : 0;
}
var qr = {}.constructor;
function we(n) {
  return n != null && n.constructor === qr;
}
function Lt(n) {
  "@babel/helpers - typeof";
  return Lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Lt(n);
}
function mt(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Sn(n, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a);
  }
}
function pt(n, e, t) {
  return e && Sn(n.prototype, e), t && Sn(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var Qr = "1.2.0", ei = "1.7.35", En = " ext. ", ti = /^\d+$/, D = /* @__PURE__ */ function() {
  function n(e) {
    mt(this, n), ii(e), this.metadata = e, Ta.call(this, e);
  }
  return pt(n, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(t) {
        return t !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(t) {
      return this.metadata.countries[t];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(t) {
      return this.getCountryMetadata(t) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(t) {
      if (this.getCountryCodesForCallingCode(t))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[t])
          return !0;
      } else {
        var a = this.countryCallingCodes()[t];
        if (a && a.length === 1 && a[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(t) {
      return this.nonGeographic() ? !!this.nonGeographic()[t] : !this.getCountryCodesForCallingCode(t);
    }
    // Deprecated.
  }, {
    key: "country",
    value: function(t) {
      return this.selectNumberingPlan(t);
    }
  }, {
    key: "selectNumberingPlan",
    value: function(t, a) {
      if (t && ti.test(t) && (a = t, t = null), t && t !== "001") {
        if (!this.hasCountry(t))
          throw new Error("Unknown country: ".concat(t));
        this.numberingPlan = new In(this.getCountryMetadata(t), this);
      } else if (a) {
        if (!this.hasCallingCode(a))
          throw new Error("Unknown calling code: ".concat(a));
        this.numberingPlan = new In(this.getNumberingPlanMetadata(a), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(t) {
      var a = this.countryCallingCodes()[t];
      if (a)
        return a.length === 1 && a[0].length === 3 ? void 0 : a;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(t) {
      var a = this.getCountryCodesForCallingCode(t);
      if (a)
        return a[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(t) {
      var a = this.getCountryCodeForCallingCode(t);
      if (a)
        return this.getCountryMetadata(a);
      if (this.nonGeographic()) {
        var r = this.nonGeographic()[t];
        if (r)
          return r;
      } else {
        var i = this.countryCallingCodes()[t];
        if (i && i.length === 1 && i[0] === "001")
          return this.metadata.countries["001"];
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function(t) {
      return this.numberingPlan.type(t);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function() {
      return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function(t) {
      return this.selectNumberingPlan(t);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]), n;
}(), In = /* @__PURE__ */ function() {
  function n(e, t) {
    mt(this, n), this.globalMetadataObject = t, this.metadata = e, Ta.call(this, t.metadata);
  }
  return pt(n, [{
    key: "callingCode",
    value: function() {
      return this.metadata[0];
    }
    // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.v1)
        return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function(t) {
      return t[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function() {
      var t = this, a = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return a.map(function(r) {
        return new ni(r, t);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(t) {
      return t[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function() {
      return this.types() && this.types().length === 0 ? !1 : !!this.types();
    }
  }, {
    key: "type",
    value: function(t) {
      if (this.hasTypes() && On(this.types(), t))
        return new ri(On(this.types(), t), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? En : this.metadata[13] || En;
    }
  }]), n;
}(), ni = /* @__PURE__ */ function() {
  function n(e, t) {
    mt(this, n), this._format = e, this.metadata = t;
  }
  return pt(n, [{
    key: "pattern",
    value: function() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function() {
      return !!(this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !ai.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]), n;
}(), ai = /^\(?\$1\)?$/, ri = /* @__PURE__ */ function() {
  function n(e, t) {
    mt(this, n), this.type = e, this.metadata = t;
  }
  return pt(n, [{
    key: "pattern",
    value: function() {
      return this.metadata.v1 ? this.type : this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.metadata.v1)
        return this.type[1] || this.metadata.possibleLengths();
    }
  }]), n;
}();
function On(n, e) {
  switch (e) {
    case "FIXED_LINE":
      return n[0];
    case "MOBILE":
      return n[1];
    case "TOLL_FREE":
      return n[2];
    case "PREMIUM_RATE":
      return n[3];
    case "PERSONAL_NUMBER":
      return n[4];
    case "VOICEMAIL":
      return n[5];
    case "UAN":
      return n[6];
    case "PAGER":
      return n[7];
    case "VOIP":
      return n[8];
    case "SHARED_COST":
      return n[9];
  }
}
function ii(n) {
  if (!n)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!we(n) || !we(n.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(we(n) ? "an object of shape: { " + Object.keys(n).join(", ") + " }" : "a " + di(n) + ": " + n, "."));
}
var di = function(e) {
  return Lt(e);
};
function gt(n, e) {
  if (e = new D(e), e.hasCountry(n))
    return e.country(n).countryCallingCode();
  throw new Error("Unknown country: ".concat(n));
}
function si(n, e) {
  return e.countries.hasOwnProperty(n);
}
function Ta(n) {
  var e = n.version;
  typeof e == "number" ? (this.v1 = e === 1, this.v2 = e === 2, this.v3 = e === 3, this.v4 = e === 4) : e ? Tn(e, Qr) === -1 ? this.v2 = !0 : Tn(e, ei) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
var oi = ";ext=", _e = function(e) {
  return "([".concat(G, "]{1,").concat(e, "})");
};
function Sa(n) {
  var e = "20", t = "15", a = "9", r = "6", i = "[  \\t,]*", d = "[:\\.．]?[  \\t,-]*", s = "#?", u = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", l = "(?:[xｘ#＃~～]|int|ｉｎｔ)", c = "[- ]+", g = "[  \\t]*", y = "(?:,{2}|;)", S = oi + _e(e), R = i + u + d + _e(e) + s, M = i + l + d + _e(a) + s, j = c + _e(r) + "#", Z = g + y + d + _e(t) + s, w = g + "(?:,)+" + d + _e(a) + s;
  return S + "|" + R + "|" + M + "|" + j + "|" + Z + "|" + w;
}
var ui = "[" + G + "]{" + qt + "}", li = "[" + $t + "]{0,1}(?:[" + K + "]*[" + G + "]){3,}[" + K + G + "]*", ci = new RegExp("^[" + $t + "]{0,1}(?:[" + K + "]*[" + G + "]){1,2}$", "i"), fi = li + // Phone number extensions
"(?:" + Sa() + ")?", hi = new RegExp(
  // Either a short two-digit-only phone number
  "^" + ui + "$|^" + fi + "$",
  "i"
);
function $i(n) {
  return n.length >= qt && hi.test(n);
}
function mi(n) {
  return ci.test(n);
}
var wn = new RegExp("(?:" + Sa() + ")$", "i");
function pi(n) {
  var e = n.search(wn);
  if (e < 0)
    return {};
  for (var t = n.slice(0, e), a = n.match(wn), r = 1; r < a.length; ) {
    if (a[r])
      return {
        number: t,
        ext: a[r]
      };
    r++;
  }
}
function gi(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = yi(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var a = 0;
    return function() {
      return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yi(n, e) {
  if (n) {
    if (typeof n == "string")
      return An(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return An(n, e);
  }
}
function An(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, a = new Array(e); t < e; t++)
    a[t] = n[t];
  return a;
}
var vi = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function Ea(n) {
  return vi[n];
}
function nt(n) {
  for (var e = "", t = gi(n.split("")), a; !(a = t()).done; ) {
    var r = a.value, i = Ea(r);
    i && (e += i);
  }
  return e;
}
function bi(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = _i(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var a = 0;
    return function() {
      return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _i(n, e) {
  if (n) {
    if (typeof n == "string")
      return Rn(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Rn(n, e);
  }
}
function Rn(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, a = new Array(e); t < e; t++)
    a[t] = n[t];
  return a;
}
function kn(n) {
  for (var e = "", t = bi(n.split("")), a; !(a = t()).done; ) {
    var r = a.value;
    e += Ni(r, e) || "";
  }
  return e;
}
function Ni(n, e, t) {
  if (n === "+") {
    if (e) {
      typeof t == "function" && t("end");
      return;
    }
    return "+";
  }
  return Ea(n);
}
function Ci(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = Pi(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var a = 0;
    return function() {
      return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pi(n, e) {
  if (n) {
    if (typeof n == "string")
      return Fn(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Fn(n, e);
  }
}
function Fn(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, a = new Array(e); t < e; t++)
    a[t] = n[t];
  return a;
}
function xi(n, e) {
  for (var t = n.slice(), a = Ci(e), r; !(r = a()).done; ) {
    var i = r.value;
    n.indexOf(i) < 0 && t.push(i);
  }
  return t.sort(function(d, s) {
    return d - s;
  });
}
function yt(n, e) {
  return Ia(n, void 0, e);
}
function Ia(n, e, t) {
  var a = t.type(e), r = a && a.possibleLengths() || t.possibleLengths();
  if (!r)
    return "IS_POSSIBLE";
  if (e === "FIXED_LINE_OR_MOBILE") {
    if (!t.type("FIXED_LINE"))
      return Ia(n, "MOBILE", t);
    var i = t.type("MOBILE");
    i && (r = xi(r, i.possibleLengths()));
  } else if (e && !a)
    return "INVALID_LENGTH";
  var d = n.length, s = r[0];
  return s === d ? "IS_POSSIBLE" : s > d ? "TOO_SHORT" : r[r.length - 1] < d ? "TOO_LONG" : r.indexOf(d, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function Ti(n, e, t) {
  if (e === void 0 && (e = {}), t = new D(t), e.v2) {
    if (!n.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    t.selectNumberingPlan(n.countryCallingCode);
  } else {
    if (!n.phone)
      return !1;
    if (n.country) {
      if (!t.hasCountry(n.country))
        throw new Error("Unknown country: ".concat(n.country));
      t.country(n.country);
    } else {
      if (!n.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      t.selectNumberingPlan(n.countryCallingCode);
    }
  }
  if (t.possibleLengths())
    return Oa(n.phone || n.nationalNumber, t);
  if (n.countryCallingCode && t.isNonGeographicCallingCode(n.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function Oa(n, e) {
  switch (yt(n, e)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function ie(n, e) {
  return n = n || "", new RegExp("^(?:" + e + ")$").test(n);
}
function Si(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = Ei(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var a = 0;
    return function() {
      return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ei(n, e) {
  if (n) {
    if (typeof n == "string")
      return Mn(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Mn(n, e);
  }
}
function Mn(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, a = new Array(e); t < e; t++)
    a[t] = n[t];
  return a;
}
var Ii = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function Qt(n, e, t) {
  if (e = e || {}, !(!n.country && !n.countryCallingCode)) {
    t = new D(t), t.selectNumberingPlan(n.country, n.countryCallingCode);
    var a = e.v2 ? n.nationalNumber : n.phone;
    if (ie(a, t.nationalNumberPattern())) {
      if (Ot(a, "FIXED_LINE", t))
        return t.type("MOBILE") && t.type("MOBILE").pattern() === "" || !t.type("MOBILE") || Ot(a, "MOBILE", t) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var r = Si(Ii), i; !(i = r()).done; ) {
        var d = i.value;
        if (Ot(a, d, t))
          return d;
      }
    }
  }
}
function Ot(n, e, t) {
  return e = t.type(e), !e || !e.pattern() || e.possibleLengths() && e.possibleLengths().indexOf(n.length) < 0 ? !1 : ie(n, e.pattern());
}
function Oi(n, e, t) {
  if (e = e || {}, t = new D(t), t.selectNumberingPlan(n.country, n.countryCallingCode), t.hasTypes())
    return Qt(n, e, t.metadata) !== void 0;
  var a = e.v2 ? n.nationalNumber : n.phone;
  return ie(a, t.nationalNumberPattern());
}
function wi(n, e, t) {
  var a = new D(t), r = a.getCountryCodesForCallingCode(n);
  return r ? r.filter(function(i) {
    return Ai(e, i, t);
  }) : [];
}
function Ai(n, e, t) {
  var a = new D(t);
  return a.selectNumberingPlan(e), a.numberingPlan.possibleLengths().indexOf(n.length) >= 0;
}
function wa(n) {
  return n.replace(new RegExp("[".concat(K, "]+"), "g"), " ").trim();
}
var Aa = /(\$\d)/;
function Ra(n, e, t) {
  var a = t.useInternationalFormat, r = t.withNationalPrefix;
  t.carrierCode, t.metadata;
  var i = n.replace(new RegExp(e.pattern()), a ? e.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    r && e.nationalPrefixFormattingRule() ? e.format().replace(Aa, e.nationalPrefixFormattingRule()) : e.format()
  ));
  return a ? wa(i) : i;
}
var Ri = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function ki(n, e, t) {
  var a = new D(t);
  if (a.selectNumberingPlan(n, e), a.defaultIDDPrefix())
    return a.defaultIDDPrefix();
  if (Ri.test(a.IDDPrefix()))
    return a.IDDPrefix();
}
function Fi(n) {
  var e = n.number, t = n.ext;
  if (!e)
    return "";
  if (e[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(e).concat(t ? ";ext=" + t : "");
}
function Mi(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = Di(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var a = 0;
    return function() {
      return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Di(n, e) {
  if (n) {
    if (typeof n == "string")
      return Dn(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Dn(n, e);
  }
}
function Dn(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, a = new Array(e); t < e; t++)
    a[t] = n[t];
  return a;
}
function Ln(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function jn(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ln(Object(t), !0).forEach(function(a) {
      Li(n, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Ln(Object(t)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return n;
}
function Li(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
var Bn = {
  formatExtension: function(e, t, a) {
    return "".concat(e).concat(a.ext()).concat(t);
  }
};
function ji(n, e, t, a) {
  if (t ? t = jn(jn({}, Bn), t) : t = Bn, a = new D(a), n.country && n.country !== "001") {
    if (!a.hasCountry(n.country))
      throw new Error("Unknown country: ".concat(n.country));
    a.country(n.country);
  } else if (n.countryCallingCode)
    a.selectNumberingPlan(n.countryCallingCode);
  else
    return n.phone || "";
  var r = a.countryCallingCode(), i = t.v2 ? n.nationalNumber : n.phone, d;
  switch (e) {
    case "NATIONAL":
      return i ? (d = at(i, n.carrierCode, "NATIONAL", a, t), wt(d, n.ext, a, t.formatExtension)) : "";
    case "INTERNATIONAL":
      return i ? (d = at(i, null, "INTERNATIONAL", a, t), d = "+".concat(r, " ").concat(d), wt(d, n.ext, a, t.formatExtension)) : "+".concat(r);
    case "E.164":
      return "+".concat(r).concat(i);
    case "RFC3966":
      return Fi({
        number: "+".concat(r).concat(i),
        ext: n.ext
      });
    case "IDD":
      if (!t.fromCountry)
        return;
      var s = Gi(i, n.carrierCode, r, t.fromCountry, a);
      return wt(s, n.ext, a, t.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(e, '"'));
  }
}
function at(n, e, t, a, r) {
  var i = Bi(a.formats(), n);
  return i ? Ra(n, i, {
    useInternationalFormat: t === "INTERNATIONAL",
    withNationalPrefix: !(i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && r && r.nationalPrefix === !1),
    carrierCode: e,
    metadata: a
  }) : n;
}
function Bi(n, e) {
  for (var t = Mi(n), a; !(a = t()).done; ) {
    var r = a.value;
    if (r.leadingDigitsPatterns().length > 0) {
      var i = r.leadingDigitsPatterns()[r.leadingDigitsPatterns().length - 1];
      if (e.search(i) !== 0)
        continue;
    }
    if (ie(e, r.pattern()))
      return r;
  }
}
function wt(n, e, t, a) {
  return e ? a(n, e, t) : n;
}
function Gi(n, e, t, a, r) {
  var i = gt(a, r.metadata);
  if (i === t) {
    var d = at(n, e, "NATIONAL", r);
    return t === "1" ? t + " " + d : d;
  }
  var s = ki(a, void 0, r.metadata);
  if (s)
    return "".concat(s, " ").concat(t, " ").concat(at(n, null, "INTERNATIONAL", r));
}
function Gn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function Un(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Gn(Object(t), !0).forEach(function(a) {
      Ui(n, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Gn(Object(t)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return n;
}
function Ui(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Zi(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Zn(n, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a);
  }
}
function Vi(n, e, t) {
  return e && Zn(n.prototype, e), t && Zn(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var ka = /* @__PURE__ */ function() {
  function n(e, t, a) {
    if (Zi(this, n), !e)
      throw new TypeError("`country` or `countryCallingCode` not passed");
    if (!t)
      throw new TypeError("`nationalNumber` not passed");
    if (!a)
      throw new TypeError("`metadata` not passed");
    var r = Wi(e, a), i = r.country, d = r.countryCallingCode;
    this.country = i, this.countryCallingCode = d, this.nationalNumber = t, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return a;
    };
  }
  return Vi(n, [{
    key: "setExt",
    value: function(t) {
      this.ext = t;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : wi(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return Ti(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return Oi(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var t = new D(this.getMetadata());
      return t.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(t) {
      return this.number === t.number && this.ext === t.ext;
    }
    // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
    // but later it was found out that it doesn't include the possible `TOO_SHORT` result
    // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
    // so eventually I simply commented out this method from the `PhoneNumber` class
    // and just left the `validatePhoneNumberLength()` function, even though that one would require
    // and additional step to also validate the actual country / calling code of the phone number.
    // validateLength() {
    // 	const metadata = new Metadata(this.getMetadata())
    // 	metadata.selectNumberingPlan(this.countryCallingCode)
    // 	const result = checkNumberLength(this.nationalNumber, metadata)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function() {
      return Qt(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(t, a) {
      return ji(this, t, a ? Un(Un({}, a), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function(t) {
      return this.format("NATIONAL", t);
    }
  }, {
    key: "formatInternational",
    value: function(t) {
      return this.format("INTERNATIONAL", t);
    }
  }, {
    key: "getURI",
    value: function(t) {
      return this.format("RFC3966", t);
    }
  }]), n;
}(), Hi = function(e) {
  return /^[A-Z]{2}$/.test(e);
};
function Wi(n, e) {
  var t, a, r = new D(e);
  return Hi(n) ? (t = n, r.selectNumberingPlan(t), a = r.countryCallingCode()) : a = n, {
    country: t,
    countryCallingCode: a
  };
}
var Ki = new RegExp("([" + G + "])");
function Fa(n, e, t, a) {
  if (e) {
    var r = new D(a);
    r.selectNumberingPlan(e, t);
    var i = new RegExp(r.IDDPrefix());
    if (n.search(i) === 0) {
      n = n.slice(n.match(i)[0].length);
      var d = n.match(Ki);
      if (!(d && d[1] != null && d[1].length > 0 && d[1] === "0"))
        return n;
    }
  }
}
function jt(n, e) {
  if (n && e.numberingPlan.nationalPrefixForParsing()) {
    var t = new RegExp("^(?:" + e.numberingPlan.nationalPrefixForParsing() + ")"), a = t.exec(n);
    if (a) {
      var r, i, d = a.length - 1, s = d > 0 && a[d];
      if (e.nationalPrefixTransformRule() && s)
        r = n.replace(t, e.nationalPrefixTransformRule()), d > 1 && (i = a[1]);
      else {
        var u = a[0];
        r = n.slice(u.length), s && (i = a[1]);
      }
      var l;
      if (s) {
        var c = n.indexOf(a[1]), g = n.slice(0, c);
        g === e.numberingPlan.nationalPrefix() && (l = e.numberingPlan.nationalPrefix());
      } else
        l = a[0];
      return {
        nationalNumber: r,
        nationalPrefix: l,
        carrierCode: i
      };
    }
  }
  return {
    nationalNumber: n
  };
}
function Bt(n, e) {
  var t = jt(n, e), a = t.carrierCode, r = t.nationalNumber;
  if (r !== n) {
    if (!Yi(n, r, e))
      return {
        nationalNumber: n
      };
    if (e.possibleLengths() && !zi(r, e))
      return {
        nationalNumber: n
      };
  }
  return {
    nationalNumber: r,
    carrierCode: a
  };
}
function Yi(n, e, t) {
  return !(ie(n, t.nationalNumberPattern()) && !ie(e, t.nationalNumberPattern()));
}
function zi(n, e) {
  switch (yt(n, e)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function Ma(n, e, t, a) {
  var r = e ? gt(e, a) : t;
  if (n.indexOf(r) === 0) {
    a = new D(a), a.selectNumberingPlan(e, t);
    var i = n.slice(r.length), d = Bt(i, a), s = d.nationalNumber, u = Bt(n, a), l = u.nationalNumber;
    if (!ie(l, a.nationalNumberPattern()) && ie(s, a.nationalNumberPattern()) || yt(l, a) === "TOO_LONG")
      return {
        countryCallingCode: r,
        number: i
      };
  }
  return {
    number: n
  };
}
function Da(n, e, t, a) {
  if (!n)
    return {};
  var r;
  if (n[0] !== "+") {
    var i = Fa(n, e, t, a);
    if (i && i !== n)
      r = !0, n = "+" + i;
    else {
      if (e || t) {
        var d = Ma(n, e, t, a), s = d.countryCallingCode, u = d.number;
        if (s)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: s,
            number: u
          };
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number: n
      };
    }
  }
  if (n[1] === "0")
    return {};
  a = new D(a);
  for (var l = 2; l - 1 <= Hr && l <= n.length; ) {
    var c = n.slice(1, l);
    if (a.hasCallingCode(c))
      return a.selectNumberingPlan(c), {
        countryCallingCodeSource: r ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: c,
        number: n.slice(l)
      };
    l++;
  }
  return {};
}
function Ji(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = Xi(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var a = 0;
    return function() {
      return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xi(n, e) {
  if (n) {
    if (typeof n == "string")
      return Vn(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Vn(n, e);
  }
}
function Vn(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, a = new Array(e); t < e; t++)
    a[t] = n[t];
  return a;
}
function La(n, e) {
  var t = e.countries, a = e.defaultCountry, r = e.metadata;
  r = new D(r);
  for (var i = [], d = Ji(t), s; !(s = d()).done; ) {
    var u = s.value;
    if (r.country(u), r.leadingDigits()) {
      if (n && n.search(r.leadingDigits()) === 0)
        return u;
    } else if (Qt({
      phone: n,
      country: u
    }, void 0, r.metadata))
      if (a) {
        if (u === a)
          return u;
        i.push(u);
      } else
        return u;
  }
  if (i.length > 0)
    return i[0];
}
var qi = !1;
function ja(n, e) {
  var t = e.nationalNumber, a = e.defaultCountry, r = e.metadata;
  if (qi && r.isNonGeographicCallingCode(n))
    return "001";
  var i = r.getCountryCodesForCallingCode(n);
  if (i)
    return i.length === 1 ? i[0] : La(t, {
      countries: i,
      defaultCountry: a,
      metadata: r.metadata
    });
}
var Ba = "+", Qi = "[\\-\\.\\(\\)]?", Hn = "([" + G + "]|" + Qi + ")", ed = "^\\" + Ba + Hn + "*[" + G + "]" + Hn + "*$", td = new RegExp(ed, "g"), Gt = G, nd = "[" + Gt + "]+((\\-)*[" + Gt + "])*", ad = "a-zA-Z", rd = "[" + ad + "]+((\\-)*[" + Gt + "])*", id = "^(" + nd + "\\.)*" + rd + "\\.?$", dd = new RegExp(id, "g"), Wn = "tel:", Ut = ";phone-context=", sd = ";isub=";
function od(n) {
  var e = n.indexOf(Ut);
  if (e < 0)
    return null;
  var t = e + Ut.length;
  if (t >= n.length)
    return "";
  var a = n.indexOf(";", t);
  return a >= 0 ? n.substring(t, a) : n.substring(t);
}
function ud(n) {
  return n === null ? !0 : n.length === 0 ? !1 : td.test(n) || dd.test(n);
}
function ld(n, e) {
  var t = e.extractFormattedPhoneNumber, a = od(n);
  if (!ud(a))
    throw new ae("NOT_A_NUMBER");
  var r;
  if (a === null)
    r = t(n) || "";
  else {
    r = "", a.charAt(0) === Ba && (r += a);
    var i = n.indexOf(Wn), d;
    i >= 0 ? d = i + Wn.length : d = 0;
    var s = n.indexOf(Ut);
    r += n.substring(d, s);
  }
  var u = r.indexOf(sd);
  if (u > 0 && (r = r.substring(0, u)), r !== "")
    return r;
}
var cd = 250, fd = new RegExp("[" + $t + G + "]"), hd = new RegExp("[^" + G + "#]+$");
function $d(n, e, t) {
  if (e = e || {}, t = new D(t), e.defaultCountry && !t.hasCountry(e.defaultCountry))
    throw e.v2 ? new ae("INVALID_COUNTRY") : new Error("Unknown country: ".concat(e.defaultCountry));
  var a = pd(n, e.v2, e.extract), r = a.number, i = a.ext, d = a.error;
  if (!r) {
    if (e.v2)
      throw d === "TOO_SHORT" ? new ae("TOO_SHORT") : new ae("NOT_A_NUMBER");
    return {};
  }
  var s = yd(r, e.defaultCountry, e.defaultCallingCode, t), u = s.country, l = s.nationalNumber, c = s.countryCallingCode, g = s.countryCallingCodeSource, y = s.carrierCode;
  if (!t.hasSelectedNumberingPlan()) {
    if (e.v2)
      throw new ae("INVALID_COUNTRY");
    return {};
  }
  if (!l || l.length < qt) {
    if (e.v2)
      throw new ae("TOO_SHORT");
    return {};
  }
  if (l.length > Vr) {
    if (e.v2)
      throw new ae("TOO_LONG");
    return {};
  }
  if (e.v2) {
    var S = new ka(c, l, t.metadata);
    return u && (S.country = u), y && (S.carrierCode = y), i && (S.ext = i), S.__countryCallingCodeSource = g, S;
  }
  var R = (e.extended ? t.hasSelectedNumberingPlan() : u) ? ie(l, t.nationalNumberPattern()) : !1;
  return e.extended ? {
    country: u,
    countryCallingCode: c,
    carrierCode: y,
    valid: R,
    possible: R ? !0 : !!(e.extended === !0 && t.possibleLengths() && Oa(l, t)),
    phone: l,
    ext: i
  } : R ? gd(u, l, i) : {};
}
function md(n, e, t) {
  if (n) {
    if (n.length > cd) {
      if (t)
        throw new ae("TOO_LONG");
      return;
    }
    if (e === !1)
      return n;
    var a = n.search(fd);
    if (!(a < 0))
      return n.slice(a).replace(hd, "");
  }
}
function pd(n, e, t) {
  var a = ld(n, {
    extractFormattedPhoneNumber: function(d) {
      return md(d, t, e);
    }
  });
  if (!a)
    return {};
  if (!$i(a))
    return mi(a) ? {
      error: "TOO_SHORT"
    } : {};
  var r = pi(a);
  return r.ext ? r : {
    number: a
  };
}
function gd(n, e, t) {
  var a = {
    country: n,
    phone: e
  };
  return t && (a.ext = t), a;
}
function yd(n, e, t, a) {
  var r = Da(kn(n), e, t, a.metadata), i = r.countryCallingCodeSource, d = r.countryCallingCode, s = r.number, u;
  if (d)
    a.selectNumberingPlan(d);
  else if (s && (e || t))
    a.selectNumberingPlan(e, t), e && (u = e), d = t || gt(e, a.metadata);
  else
    return {};
  if (!s)
    return {
      countryCallingCodeSource: i,
      countryCallingCode: d
    };
  var l = Bt(kn(s), a), c = l.nationalNumber, g = l.carrierCode, y = ja(d, {
    nationalNumber: c,
    defaultCountry: e,
    metadata: a
  });
  return y && (u = y, y === "001" || a.country(u)), {
    country: u,
    countryCallingCode: d,
    countryCallingCodeSource: i,
    nationalNumber: c,
    carrierCode: g
  };
}
function Kn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function Yn(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Kn(Object(t), !0).forEach(function(a) {
      vd(n, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Kn(Object(t)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return n;
}
function vd(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function bd(n, e, t) {
  return $d(n, Yn(Yn({}, e), {}, {
    v2: !0
  }), t);
}
function zn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function _d(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zn(Object(t), !0).forEach(function(a) {
      Nd(n, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : zn(Object(t)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return n;
}
function Nd(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Cd(n, e) {
  return Sd(n) || Td(n, e) || xd(n, e) || Pd();
}
function Pd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xd(n, e) {
  if (n) {
    if (typeof n == "string")
      return Jn(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Jn(n, e);
  }
}
function Jn(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, a = new Array(e); t < e; t++)
    a[t] = n[t];
  return a;
}
function Td(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var a = [], r = !0, i = !1, d, s;
    try {
      for (t = t.call(n); !(r = (d = t.next()).done) && (a.push(d.value), !(e && a.length === e)); r = !0)
        ;
    } catch (u) {
      i = !0, s = u;
    } finally {
      try {
        !r && t.return != null && t.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return a;
  }
}
function Sd(n) {
  if (Array.isArray(n))
    return n;
}
function Ga(n) {
  var e = Array.prototype.slice.call(n), t = Cd(e, 4), a = t[0], r = t[1], i = t[2], d = t[3], s, u, l;
  if (typeof a == "string")
    s = a;
  else
    throw new TypeError("A text for parsing must be a string.");
  if (!r || typeof r == "string")
    d ? (u = i, l = d) : (u = void 0, l = i), r && (u = _d({
      defaultCountry: r
    }, u));
  else if (we(r))
    i ? (u = r, l = i) : l = r;
  else
    throw new Error("Invalid second argument: ".concat(r));
  return {
    text: s,
    options: u,
    metadata: l
  };
}
function Xn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function qn(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Xn(Object(t), !0).forEach(function(a) {
      Ed(n, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Xn(Object(t)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return n;
}
function Ed(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Ua(n, e, t) {
  e && e.defaultCountry && !si(e.defaultCountry, t) && (e = qn(qn({}, e), {}, {
    defaultCountry: void 0
  }));
  try {
    return bd(n, e, t);
  } catch (a) {
    if (!(a instanceof ae))
      throw a;
  }
}
function Id() {
  var n = Ga(arguments), e = n.text, t = n.options, a = n.metadata;
  return Ua(e, t, a);
}
function Qn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function ea(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Qn(Object(t), !0).forEach(function(a) {
      Od(n, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Qn(Object(t)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return n;
}
function Od(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function wd() {
  var n = Ga(arguments), e = n.text, t = n.options, a = n.metadata;
  t = ea(ea({}, t), {}, {
    extract: !1
  });
  var r = Ua(e, t, a);
  return r && r.isValid() || !1;
}
function Ad(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ta(n, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a);
  }
}
function Rd(n, e, t) {
  return e && ta(n.prototype, e), t && ta(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var kd = /* @__PURE__ */ function() {
  function n(e) {
    var t = e.onCountryChange, a = e.onCallingCodeChange;
    Ad(this, n), this.onCountryChange = t, this.onCallingCodeChange = a;
  }
  return Rd(n, [{
    key: "reset",
    value: function(t) {
      var a = t.country, r = t.callingCode;
      this.international = !1, this.missingPlus = !1, this.IDDPrefix = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(a, r);
    }
  }, {
    key: "resetNationalSignificantNumber",
    value: function() {
      this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberMatchesInput = !0, this.nationalPrefix = void 0, this.carrierCode = void 0, this.complexPrefixBeforeNationalSignificantNumber = void 0;
    }
  }, {
    key: "update",
    value: function(t) {
      for (var a = 0, r = Object.keys(t); a < r.length; a++) {
        var i = r[a];
        this[i] = t[i];
      }
    }
  }, {
    key: "initCountryAndCallingCode",
    value: function(t, a) {
      this.setCountry(t), this.setCallingCode(a);
    }
  }, {
    key: "setCountry",
    value: function(t) {
      this.country = t, this.onCountryChange(t);
    }
  }, {
    key: "setCallingCode",
    value: function(t) {
      this.callingCode = t, this.onCallingCodeChange(t, this.country);
    }
  }, {
    key: "startInternationalNumber",
    value: function(t, a) {
      this.international = !0, this.initCountryAndCallingCode(t, a);
    }
  }, {
    key: "appendDigits",
    value: function(t) {
      this.digits += t;
    }
  }, {
    key: "appendNationalSignificantNumberDigits",
    value: function(t) {
      this.nationalSignificantNumber += t;
    }
    /**
     * Returns the part of `this.digits` that corresponds to the national number.
     * Basically, all digits that have been input by the user, except for the
     * international prefix and the country calling code part
     * (if the number is an international one).
     * @return {string}
     */
  }, {
    key: "getNationalDigits",
    value: function() {
      return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits;
    }
  }, {
    key: "getDigitsWithoutInternationalPrefix",
    value: function() {
      return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits;
    }
  }]), n;
}();
function Fd(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = Md(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var a = 0;
    return function() {
      return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Md(n, e) {
  if (n) {
    if (typeof n == "string")
      return na(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return na(n, e);
  }
}
function na(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, a = new Array(e); t < e; t++)
    a[t] = n[t];
  return a;
}
var H = "x", At = new RegExp(H);
function et(n, e) {
  if (e < 1)
    return "";
  for (var t = ""; e > 1; )
    e & 1 && (t += n), e >>= 1, n += n;
  return t + n;
}
function aa(n, e) {
  return n[e] === ")" && e++, Dd(n.slice(0, e));
}
function Dd(n) {
  for (var e = [], t = 0; t < n.length; )
    n[t] === "(" ? e.push(t) : n[t] === ")" && e.pop(), t++;
  var a = 0, r = "";
  e.push(n.length);
  for (var i = 0, d = e; i < d.length; i++) {
    var s = d[i];
    r += n.slice(a, s), a = s + 1;
  }
  return r;
}
function Ld(n, e, t) {
  for (var a = Fd(t.split("")), r; !(r = a()).done; ) {
    var i = r.value;
    if (n.slice(e + 1).search(At) < 0)
      return;
    e = n.search(At), n = n.replace(At, i);
  }
  return [n, e];
}
function jd(n, e, t) {
  var a = t.metadata, r = t.shouldTryNationalPrefixFormattingRule, i = t.getSeparatorAfterNationalPrefix, d = new RegExp("^(?:".concat(e.pattern(), ")$"));
  if (d.test(n.nationalSignificantNumber))
    return Gd(n, e, {
      metadata: a,
      shouldTryNationalPrefixFormattingRule: r,
      getSeparatorAfterNationalPrefix: i
    });
}
function Bd(n, e) {
  return yt(n, e) === "IS_POSSIBLE";
}
function Gd(n, e, t) {
  var a = t.metadata, r = t.shouldTryNationalPrefixFormattingRule, i = t.getSeparatorAfterNationalPrefix;
  if (n.nationalSignificantNumber, n.international, n.nationalPrefix, n.carrierCode, r(e)) {
    var d = ra(n, e, {
      useNationalPrefixFormattingRule: !0,
      getSeparatorAfterNationalPrefix: i,
      metadata: a
    });
    if (d)
      return d;
  }
  return ra(n, e, {
    useNationalPrefixFormattingRule: !1,
    getSeparatorAfterNationalPrefix: i,
    metadata: a
  });
}
function ra(n, e, t) {
  var a = t.metadata, r = t.useNationalPrefixFormattingRule, i = t.getSeparatorAfterNationalPrefix, d = Ra(n.nationalSignificantNumber, e, {
    carrierCode: n.carrierCode,
    useInternationalFormat: n.international,
    withNationalPrefix: r,
    metadata: a
  });
  if (r || (n.nationalPrefix ? d = n.nationalPrefix + i(e) + d : n.complexPrefixBeforeNationalSignificantNumber && (d = n.complexPrefixBeforeNationalSignificantNumber + " " + d)), Ud(d, n))
    return d;
}
function Ud(n, e) {
  return nt(n) === e.getNationalDigits();
}
function Zd(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ia(n, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a);
  }
}
function Vd(n, e, t) {
  return e && ia(n.prototype, e), t && ia(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var Hd = /* @__PURE__ */ function() {
  function n() {
    Zd(this, n);
  }
  return Vd(n, [{
    key: "parse",
    value: function(t) {
      if (this.context = [{
        or: !0,
        instructions: []
      }], this.parsePattern(t), this.context.length !== 1)
        throw new Error("Non-finalized contexts left when pattern parse ended");
      var a = this.context[0], r = a.branches, i = a.instructions;
      if (r)
        return {
          op: "|",
          args: r.concat([Rt(i)])
        };
      if (i.length === 0)
        throw new Error("Pattern is required");
      return i.length === 1 ? i[0] : i;
    }
  }, {
    key: "startContext",
    value: function(t) {
      this.context.push(t);
    }
  }, {
    key: "endContext",
    value: function() {
      this.context.pop();
    }
  }, {
    key: "getContext",
    value: function() {
      return this.context[this.context.length - 1];
    }
  }, {
    key: "parsePattern",
    value: function(t) {
      if (!t)
        throw new Error("Pattern is required");
      var a = t.match(Yd);
      if (!a) {
        if (Kd.test(t))
          throw new Error("Illegal characters found in a pattern: ".concat(t));
        this.getContext().instructions = this.getContext().instructions.concat(t.split(""));
        return;
      }
      var r = a[1], i = t.slice(0, a.index), d = t.slice(a.index + r.length);
      switch (r) {
        case "(?:":
          i && this.parsePattern(i), this.startContext({
            or: !0,
            instructions: [],
            branches: []
          });
          break;
        case ")":
          if (!this.getContext().or)
            throw new Error('")" operator must be preceded by "(?:" operator');
          if (i && this.parsePattern(i), this.getContext().instructions.length === 0)
            throw new Error('No instructions found after "|" operator in an "or" group');
          var s = this.getContext(), u = s.branches;
          u.push(Rt(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({
            op: "|",
            args: u
          });
          break;
        case "|":
          if (!this.getContext().or)
            throw new Error('"|" operator can only be used inside "or" groups');
          if (i && this.parsePattern(i), !this.getContext().branches)
            if (this.context.length === 1)
              this.getContext().branches = [];
            else
              throw new Error('"branches" not found in an "or" group context');
          this.getContext().branches.push(Rt(this.getContext().instructions)), this.getContext().instructions = [];
          break;
        case "[":
          i && this.parsePattern(i), this.startContext({
            oneOfSet: !0
          });
          break;
        case "]":
          if (!this.getContext().oneOfSet)
            throw new Error('"]" operator must be preceded by "[" operator');
          this.endContext(), this.getContext().instructions.push({
            op: "[]",
            args: Wd(i)
          });
          break;
        default:
          throw new Error("Unknown operator: ".concat(r));
      }
      d && this.parsePattern(d);
    }
  }]), n;
}();
function Wd(n) {
  for (var e = [], t = 0; t < n.length; ) {
    if (n[t] === "-") {
      if (t === 0 || t === n.length - 1)
        throw new Error("Couldn't parse a one-of set pattern: ".concat(n));
      for (var a = n[t - 1].charCodeAt(0) + 1, r = n[t + 1].charCodeAt(0) - 1, i = a; i <= r; )
        e.push(String.fromCharCode(i)), i++;
    } else
      e.push(n[t]);
    t++;
  }
  return e;
}
var Kd = /[\(\)\[\]\?\:\|]/, Yd = new RegExp(
  // any of:
  "(\\||\\(\\?\\:|\\)|\\[|\\])"
);
function Rt(n) {
  return n.length === 1 ? n[0] : n;
}
function da(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = zd(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var a = 0;
    return function() {
      return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zd(n, e) {
  if (n) {
    if (typeof n == "string")
      return sa(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return sa(n, e);
  }
}
function sa(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, a = new Array(e); t < e; t++)
    a[t] = n[t];
  return a;
}
function Jd(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function oa(n, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a);
  }
}
function Xd(n, e, t) {
  return e && oa(n.prototype, e), t && oa(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var qd = /* @__PURE__ */ function() {
  function n(e) {
    Jd(this, n), this.matchTree = new Hd().parse(e);
  }
  return Xd(n, [{
    key: "match",
    value: function(t) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.allowOverflow;
      if (!t)
        throw new Error("String is required");
      var i = Zt(t.split(""), this.matchTree, !0);
      if (i && i.match && delete i.matchedChars, !(i && i.overflow && !r))
        return i;
    }
  }]), n;
}();
function Zt(n, e, t) {
  if (typeof e == "string") {
    var a = n.join("");
    return e.indexOf(a) === 0 ? n.length === e.length ? {
      match: !0,
      matchedChars: n
    } : {
      partialMatch: !0
      // matchedChars: characters
    } : a.indexOf(e) === 0 ? t && n.length > e.length ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: n.slice(0, e.length)
    } : void 0;
  }
  if (Array.isArray(e)) {
    for (var r = n.slice(), i = 0; i < e.length; ) {
      var d = e[i], s = Zt(r, d, t && i === e.length - 1);
      if (s) {
        if (s.overflow)
          return s;
        if (s.match) {
          if (r = r.slice(s.matchedChars.length), r.length === 0)
            return i === e.length - 1 ? {
              match: !0,
              matchedChars: n
            } : {
              partialMatch: !0
              // matchedChars: characters
            };
        } else {
          if (s.partialMatch)
            return {
              partialMatch: !0
              // matchedChars: characters
            };
          throw new Error(`Unsupported match result:
`.concat(JSON.stringify(s, null, 2)));
        }
      } else
        return;
      i++;
    }
    return t ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: n.slice(0, n.length - r.length)
    };
  }
  switch (e.op) {
    case "|":
      for (var u, l = da(e.args), c; !(c = l()).done; ) {
        var g = c.value, y = Zt(n, g, t);
        if (y) {
          if (y.overflow)
            return y;
          if (y.match)
            return {
              match: !0,
              matchedChars: y.matchedChars
            };
          if (y.partialMatch)
            u = !0;
          else
            throw new Error(`Unsupported match result:
`.concat(JSON.stringify(y, null, 2)));
        }
      }
      return u ? {
        partialMatch: !0
        // matchedChars: ...
      } : void 0;
    case "[]":
      for (var S = da(e.args), R; !(R = S()).done; ) {
        var M = R.value;
        if (n[0] === M)
          return n.length === 1 ? {
            match: !0,
            matchedChars: n
          } : t ? {
            overflow: !0
          } : {
            match: !0,
            matchedChars: [M]
          };
      }
      return;
    default:
      throw new Error("Unsupported instruction tree: ".concat(e));
  }
}
function ua(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = Qd(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var a = 0;
    return function() {
      return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qd(n, e) {
  if (n) {
    if (typeof n == "string")
      return la(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return la(n, e);
  }
}
function la(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, a = new Array(e); t < e; t++)
    a[t] = n[t];
  return a;
}
function es(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ca(n, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a);
  }
}
function ts(n, e, t) {
  return e && ca(n.prototype, e), t && ca(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var Vt = "9", ns = 15, as = et(Vt, ns), rs = /[- ]/, is = function() {
  return /\[([^\[\]])*\]/g;
}, ds = function() {
  return /\d(?=[^,}][^,}])/g;
}, ss = new RegExp("[" + K + "]*\\$1[" + K + "]*(\\$\\d[" + K + "]*)*$"), fa = 3, os = /* @__PURE__ */ function() {
  function n(e) {
    e.state;
    var t = e.metadata;
    es(this, n), this.metadata = t, this.resetFormat();
  }
  return ts(n, [{
    key: "resetFormat",
    value: function() {
      this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1;
    }
  }, {
    key: "reset",
    value: function(t, a) {
      this.resetFormat(), t ? (this.isNANP = t.callingCode() === "1", this.matchingFormats = t.formats(), a.nationalSignificantNumber && this.narrowDownMatchingFormats(a)) : (this.isNANP = void 0, this.matchingFormats = []);
    }
    /**
     * Formats an updated phone number.
     * @param  {string} nextDigits — Additional phone number digits.
     * @param  {object} state — `AsYouType` state.
     * @return {[string]} Returns undefined if the updated phone number can't be formatted using any of the available formats.
     */
  }, {
    key: "format",
    value: function(t, a) {
      var r = this;
      if (Bd(a.nationalSignificantNumber, this.metadata))
        for (var i = ua(this.matchingFormats), d; !(d = i()).done; ) {
          var s = d.value, u = jd(a, s, {
            metadata: this.metadata,
            shouldTryNationalPrefixFormattingRule: function(c) {
              return r.shouldTryNationalPrefixFormattingRule(c, {
                international: a.international,
                nationalPrefix: a.nationalPrefix
              });
            },
            getSeparatorAfterNationalPrefix: function(c) {
              return r.getSeparatorAfterNationalPrefix(c);
            }
          });
          if (u)
            return this.resetFormat(), this.chosenFormat = s, this.setNationalNumberTemplate(u.replace(/\d/g, H), a), this.populatedNationalNumberTemplate = u, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(H), u;
        }
      return this.formatNationalNumberWithNextDigits(t, a);
    }
    // Formats the next phone number digits.
  }, {
    key: "formatNationalNumberWithNextDigits",
    value: function(t, a) {
      var r = this.chosenFormat, i = this.chooseFormat(a);
      if (i)
        return i === r ? this.formatNextNationalNumberDigits(t) : this.formatNextNationalNumberDigits(a.getNationalDigits());
    }
  }, {
    key: "narrowDownMatchingFormats",
    value: function(t) {
      var a = this, r = t.nationalSignificantNumber, i = t.nationalPrefix, d = t.international, s = r, u = s.length - fa;
      u < 0 && (u = 0), this.matchingFormats = this.matchingFormats.filter(function(l) {
        return a.formatSuits(l, d, i) && a.formatMatches(l, s, u);
      }), this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1 && this.resetFormat();
    }
  }, {
    key: "formatSuits",
    value: function(t, a, r) {
      return !(r && !t.usesNationalPrefix() && // !format.domesticCarrierCodeFormattingRule() &&
      !t.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !a && !r && t.nationalPrefixIsMandatoryWhenFormattingInNationalFormat());
    }
  }, {
    key: "formatMatches",
    value: function(t, a, r) {
      var i = t.leadingDigitsPatterns().length;
      if (i === 0)
        return !0;
      r = Math.min(r, i - 1);
      var d = t.leadingDigitsPatterns()[r];
      if (a.length < fa)
        try {
          return new qd(d).match(a, {
            allowOverflow: !0
          }) !== void 0;
        } catch (s) {
          return console.error(s), !0;
        }
      return new RegExp("^(".concat(d, ")")).test(a);
    }
  }, {
    key: "getFormatFormat",
    value: function(t, a) {
      return a ? t.internationalFormat() : t.format();
    }
  }, {
    key: "chooseFormat",
    value: function(t) {
      for (var a = this, r = function() {
        var l = d.value;
        return a.chosenFormat === l ? "break" : ss.test(a.getFormatFormat(l, t.international)) ? a.createTemplateForFormat(l, t) ? (a.chosenFormat = l, "break") : (a.matchingFormats = a.matchingFormats.filter(function(c) {
          return c !== l;
        }), "continue") : "continue";
      }, i = ua(this.matchingFormats.slice()), d; !(d = i()).done; ) {
        var s = r();
        if (s === "break")
          break;
      }
      return this.chosenFormat || this.resetFormat(), this.chosenFormat;
    }
  }, {
    key: "createTemplateForFormat",
    value: function(t, a) {
      if (!(t.pattern().indexOf("|") >= 0)) {
        var r = this.getTemplateForFormat(t, a);
        if (r)
          return this.setNationalNumberTemplate(r, a), !0;
      }
    }
  }, {
    key: "getSeparatorAfterNationalPrefix",
    value: function(t) {
      return this.isNANP || t && t.nationalPrefixFormattingRule() && rs.test(t.nationalPrefixFormattingRule()) ? " " : "";
    }
  }, {
    key: "getInternationalPrefixBeforeCountryCallingCode",
    value: function(t, a) {
      var r = t.IDDPrefix, i = t.missingPlus;
      return r ? a && a.spacing === !1 ? r : r + " " : i ? "" : "+";
    }
  }, {
    key: "getTemplate",
    value: function(t) {
      if (this.template) {
        for (var a = -1, r = 0, i = t.international ? this.getInternationalPrefixBeforeCountryCallingCode(t, {
          spacing: !1
        }) : ""; r < i.length + t.getDigitsWithoutInternationalPrefix().length; )
          a = this.template.indexOf(H, a + 1), r++;
        return aa(this.template, a + 1);
      }
    }
  }, {
    key: "setNationalNumberTemplate",
    value: function(t, a) {
      this.nationalNumberTemplate = t, this.populatedNationalNumberTemplate = t, this.populatedNationalNumberTemplatePosition = -1, a.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(a).replace(/[\d\+]/g, H) + et(H, a.callingCode.length) + " " + t : this.template = t;
    }
    /**
     * Generates formatting template for a national phone number,
     * optionally containing a national prefix, for a format.
     * @param  {Format} format
     * @param  {string} nationalPrefix
     * @return {string}
     */
  }, {
    key: "getTemplateForFormat",
    value: function(t, a) {
      var r = a.nationalSignificantNumber, i = a.international, d = a.nationalPrefix, s = a.complexPrefixBeforeNationalSignificantNumber, u = t.pattern();
      u = u.replace(is(), "\\d").replace(ds(), "\\d");
      var l = as.match(u)[0];
      if (!(r.length > l.length)) {
        var c = new RegExp("^" + u + "$"), g = r.replace(/\d/g, Vt);
        c.test(g) && (l = g);
        var y = this.getFormatFormat(t, i), S;
        if (this.shouldTryNationalPrefixFormattingRule(t, {
          international: i,
          nationalPrefix: d
        })) {
          var R = y.replace(Aa, t.nationalPrefixFormattingRule());
          if (nt(t.nationalPrefixFormattingRule()) === (d || "") + nt("$1") && (y = R, S = !0, d))
            for (var M = d.length; M > 0; )
              y = y.replace(/\d/, H), M--;
        }
        var j = l.replace(new RegExp(u), y).replace(new RegExp(Vt, "g"), H);
        return S || (s ? j = et(H, s.length) + " " + j : d && (j = et(H, d.length) + this.getSeparatorAfterNationalPrefix(t) + j)), i && (j = wa(j)), j;
      }
    }
  }, {
    key: "formatNextNationalNumberDigits",
    value: function(t) {
      var a = Ld(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, t);
      if (!a) {
        this.resetFormat();
        return;
      }
      return this.populatedNationalNumberTemplate = a[0], this.populatedNationalNumberTemplatePosition = a[1], aa(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
    }
  }, {
    key: "shouldTryNationalPrefixFormattingRule",
    value: function(t, a) {
      var r = a.international, i = a.nationalPrefix;
      if (t.nationalPrefixFormattingRule()) {
        var d = t.usesNationalPrefix();
        if (d && i || !d && !r)
          return !0;
      }
    }
  }]), n;
}();
function Za(n, e) {
  return fs(n) || cs(n, e) || ls(n, e) || us();
}
function us() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ls(n, e) {
  if (n) {
    if (typeof n == "string")
      return ha(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ha(n, e);
  }
}
function ha(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, a = new Array(e); t < e; t++)
    a[t] = n[t];
  return a;
}
function cs(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var a = [], r = !0, i = !1, d, s;
    try {
      for (t = t.call(n); !(r = (d = t.next()).done) && (a.push(d.value), !(e && a.length === e)); r = !0)
        ;
    } catch (u) {
      i = !0, s = u;
    } finally {
      try {
        !r && t.return != null && t.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return a;
  }
}
function fs(n) {
  if (Array.isArray(n))
    return n;
}
function hs(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function $a(n, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a);
  }
}
function $s(n, e, t) {
  return e && $a(n.prototype, e), t && $a(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var ms = "[" + K + G + "]+", ps = new RegExp("^" + ms + "$", "i"), gs = "(?:[" + $t + "][" + K + G + "]*|[" + K + G + "]+)", ys = new RegExp("[^" + K + G + "]+.*$"), vs = /[^\d\[\]]/, bs = /* @__PURE__ */ function() {
  function n(e) {
    var t = e.defaultCountry, a = e.defaultCallingCode, r = e.metadata, i = e.onNationalSignificantNumberChange;
    hs(this, n), this.defaultCountry = t, this.defaultCallingCode = a, this.metadata = r, this.onNationalSignificantNumberChange = i;
  }
  return $s(n, [{
    key: "input",
    value: function(t, a) {
      var r = Cs(t), i = Za(r, 2), d = i[0], s = i[1], u = nt(d), l;
      return s && (a.digits || (a.startInternationalNumber(), u || (l = !0))), u && this.inputDigits(u, a), {
        digits: u,
        justLeadingPlus: l
      };
    }
    /**
     * Inputs "next" phone number digits.
     * @param  {string} digits
     * @return {string} [formattedNumber] Formatted national phone number (if it can be formatted at this stage). Returning `undefined` means "don't format the national phone number at this stage".
     */
  }, {
    key: "inputDigits",
    value: function(t, a) {
      var r = a.digits, i = r.length < 3 && r.length + t.length >= 3;
      if (a.appendDigits(t), i && this.extractIddPrefix(a), this.isWaitingForCountryCallingCode(a)) {
        if (!this.extractCountryCallingCode(a))
          return;
      } else
        a.appendNationalSignificantNumberDigits(t);
      a.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(a.getNationalDigits(), function(d) {
        return a.update(d);
      });
    }
  }, {
    key: "isWaitingForCountryCallingCode",
    value: function(t) {
      var a = t.international, r = t.callingCode;
      return a && !r;
    }
    // Extracts a country calling code from a number
    // being entered in internatonal format.
  }, {
    key: "extractCountryCallingCode",
    value: function(t) {
      var a = Da("+" + t.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), r = a.countryCallingCode, i = a.number;
      if (r)
        return t.setCallingCode(r), t.update({
          nationalSignificantNumber: i
        }), !0;
    }
  }, {
    key: "reset",
    value: function(t) {
      if (t) {
        this.hasSelectedNumberingPlan = !0;
        var a = t._nationalPrefixForParsing();
        this.couldPossiblyExtractAnotherNationalSignificantNumber = a && vs.test(a);
      } else
        this.hasSelectedNumberingPlan = void 0, this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0;
    }
    /**
     * Extracts a national (significant) number from user input.
     * Google's library is different in that it only applies `national_prefix_for_parsing`
     * and doesn't apply `national_prefix_transform_rule` after that.
     * https://github.com/google/libphonenumber/blob/a3d70b0487875475e6ad659af404943211d26456/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L539
     * @return {boolean} [extracted]
     */
  }, {
    key: "extractNationalSignificantNumber",
    value: function(t, a) {
      if (this.hasSelectedNumberingPlan) {
        var r = jt(t, this.metadata), i = r.nationalPrefix, d = r.nationalNumber, s = r.carrierCode;
        if (d !== t)
          return this.onExtractedNationalNumber(i, s, d, t, a), !0;
      }
    }
    /**
     * In Google's code this function is called "attempt to extract longer NDD".
     * "Some national prefixes are a substring of others", they say.
     * @return {boolean} [result] — Returns `true` if extracting a national prefix produced different results from what they were.
     */
  }, {
    key: "extractAnotherNationalSignificantNumber",
    value: function(t, a, r) {
      if (!this.hasExtractedNationalSignificantNumber)
        return this.extractNationalSignificantNumber(t, r);
      if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
        var i = jt(t, this.metadata), d = i.nationalPrefix, s = i.nationalNumber, u = i.carrierCode;
        if (s !== a)
          return this.onExtractedNationalNumber(d, u, s, t, r), !0;
      }
    }
  }, {
    key: "onExtractedNationalNumber",
    value: function(t, a, r, i, d) {
      var s, u, l = i.lastIndexOf(r);
      if (l >= 0 && l === i.length - r.length) {
        u = !0;
        var c = i.slice(0, l);
        c !== t && (s = c);
      }
      d({
        nationalPrefix: t,
        carrierCode: a,
        nationalSignificantNumber: r,
        nationalSignificantNumberMatchesInput: u,
        complexPrefixBeforeNationalSignificantNumber: s
      }), this.hasExtractedNationalSignificantNumber = !0, this.onNationalSignificantNumberChange();
    }
  }, {
    key: "reExtractNationalSignificantNumber",
    value: function(t) {
      if (this.extractAnotherNationalSignificantNumber(t.getNationalDigits(), t.nationalSignificantNumber, function(a) {
        return t.update(a);
      }))
        return !0;
      if (this.extractIddPrefix(t))
        return this.extractCallingCodeAndNationalSignificantNumber(t), !0;
      if (this.fixMissingPlus(t))
        return this.extractCallingCodeAndNationalSignificantNumber(t), !0;
    }
  }, {
    key: "extractIddPrefix",
    value: function(t) {
      var a = t.international, r = t.IDDPrefix, i = t.digits;
      if (t.nationalSignificantNumber, !(a || r)) {
        var d = Fa(i, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
        if (d !== void 0 && d !== i)
          return t.update({
            IDDPrefix: i.slice(0, i.length - d.length)
          }), this.startInternationalNumber(t, {
            country: void 0,
            callingCode: void 0
          }), !0;
      }
    }
  }, {
    key: "fixMissingPlus",
    value: function(t) {
      if (!t.international) {
        var a = Ma(t.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), r = a.countryCallingCode;
        if (a.number, r)
          return t.update({
            missingPlus: !0
          }), this.startInternationalNumber(t, {
            country: t.country,
            callingCode: r
          }), !0;
      }
    }
  }, {
    key: "startInternationalNumber",
    value: function(t, a) {
      var r = a.country, i = a.callingCode;
      t.startInternationalNumber(r, i), t.nationalSignificantNumber && (t.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0);
    }
  }, {
    key: "extractCallingCodeAndNationalSignificantNumber",
    value: function(t) {
      this.extractCountryCallingCode(t) && this.extractNationalSignificantNumber(t.getNationalDigits(), function(a) {
        return t.update(a);
      });
    }
  }]), n;
}();
function _s(n) {
  var e = n.search(gs);
  if (!(e < 0)) {
    n = n.slice(e);
    var t;
    return n[0] === "+" && (t = !0, n = n.slice(1)), n = n.replace(ys, ""), t && (n = "+" + n), n;
  }
}
function Ns(n) {
  var e = _s(n) || "";
  return e[0] === "+" ? [e.slice(1), !0] : [e];
}
function Cs(n) {
  var e = Ns(n), t = Za(e, 2), a = t[0], r = t[1];
  return ps.test(a) || (a = ""), [a, r];
}
function Ps(n, e) {
  return Es(n) || Ss(n, e) || Ts(n, e) || xs();
}
function xs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ts(n, e) {
  if (n) {
    if (typeof n == "string")
      return ma(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ma(n, e);
  }
}
function ma(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, a = new Array(e); t < e; t++)
    a[t] = n[t];
  return a;
}
function Ss(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var a = [], r = !0, i = !1, d, s;
    try {
      for (t = t.call(n); !(r = (d = t.next()).done) && (a.push(d.value), !(e && a.length === e)); r = !0)
        ;
    } catch (u) {
      i = !0, s = u;
    } finally {
      try {
        !r && t.return != null && t.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return a;
  }
}
function Es(n) {
  if (Array.isArray(n))
    return n;
}
function Is(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function pa(n, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a);
  }
}
function Os(n, e, t) {
  return e && pa(n.prototype, e), t && pa(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var Va = /* @__PURE__ */ function() {
  function n(e, t) {
    Is(this, n), this.metadata = new D(t);
    var a = this.getCountryAndCallingCode(e), r = Ps(a, 2), i = r[0], d = r[1];
    this.defaultCountry = i, this.defaultCallingCode = d, this.reset();
  }
  return Os(n, [{
    key: "getCountryAndCallingCode",
    value: function(t) {
      var a, r;
      return t && (we(t) ? (a = t.defaultCountry, r = t.defaultCallingCode) : a = t), a && !this.metadata.hasCountry(a) && (a = void 0), [a, r];
    }
    /**
     * Inputs "next" phone number characters.
     * @param  {string} text
     * @return {string} Formatted phone number characters that have been input so far.
     */
  }, {
    key: "input",
    value: function(t) {
      var a = this.parser.input(t, this.state), r = a.digits, i = a.justLeadingPlus;
      if (i)
        this.formattedOutput = "+";
      else if (r) {
        this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state);
        var d;
        if (this.metadata.hasSelectedNumberingPlan() && (d = this.formatter.format(r, this.state)), d === void 0 && this.parser.reExtractNationalSignificantNumber(this.state)) {
          this.determineTheCountryIfNeeded();
          var s = this.state.getNationalDigits();
          s && (d = this.formatter.format(s, this.state));
        }
        this.formattedOutput = d ? this.getFullNumber(d) : this.getNonFormattedNumber();
      }
      return this.formattedOutput;
    }
  }, {
    key: "reset",
    value: function() {
      var t = this;
      return this.state = new kd({
        onCountryChange: function(r) {
          t.country = r;
        },
        onCallingCodeChange: function(r, i) {
          t.metadata.selectNumberingPlan(i, r), t.formatter.reset(t.metadata.numberingPlan, t.state), t.parser.reset(t.metadata.numberingPlan);
        }
      }), this.formatter = new os({
        state: this.state,
        metadata: this.metadata
      }), this.parser = new bs({
        defaultCountry: this.defaultCountry,
        defaultCallingCode: this.defaultCallingCode,
        metadata: this.metadata,
        state: this.state,
        onNationalSignificantNumberChange: function() {
          t.determineTheCountryIfNeeded(), t.formatter.reset(t.metadata.numberingPlan, t.state);
        }
      }), this.state.reset({
        country: this.defaultCountry,
        callingCode: this.defaultCallingCode
      }), this.formattedOutput = "", this;
    }
    /**
     * Returns `true` if the phone number is being input in international format.
     * In other words, returns `true` if and only if the parsed phone number starts with a `"+"`.
     * @return {boolean}
     */
  }, {
    key: "isInternational",
    value: function() {
      return this.state.international;
    }
    /**
     * Returns the "calling code" part of the phone number when it's being input
     * in an international format.
     * If no valid calling code has been entered so far, returns `undefined`.
     * @return {string} [callingCode]
     */
  }, {
    key: "getCallingCode",
    value: function() {
      if (this.isInternational())
        return this.state.callingCode;
    }
    // A legacy alias.
  }, {
    key: "getCountryCallingCode",
    value: function() {
      return this.getCallingCode();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * Returns `undefined` if no phone number has been input yet.
     * @return {string} [country]
     */
  }, {
    key: "getCountry",
    value: function() {
      var t = this.state.digits;
      if (t)
        return this._getCountry();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * @return {string} [country]
     */
  }, {
    key: "_getCountry",
    value: function() {
      var t = this.state.country;
      return t;
    }
  }, {
    key: "determineTheCountryIfNeeded",
    value: function() {
      (!this.state.country || this.isCountryCallingCodeAmbiguous()) && this.determineTheCountry();
    }
    // Prepends `+CountryCode ` in case of an international phone number
  }, {
    key: "getFullNumber",
    value: function(t) {
      var a = this;
      if (this.isInternational()) {
        var r = function(s) {
          return a.formatter.getInternationalPrefixBeforeCountryCallingCode(a.state, {
            spacing: !!s
          }) + s;
        }, i = this.state.callingCode;
        return r(i ? t ? "".concat(i, " ").concat(t) : i : "".concat(this.state.getDigitsWithoutInternationalPrefix()));
      }
      return t;
    }
  }, {
    key: "getNonFormattedNationalNumberWithPrefix",
    value: function() {
      var t = this.state, a = t.nationalSignificantNumber, r = t.complexPrefixBeforeNationalSignificantNumber, i = t.nationalPrefix, d = a, s = r || i;
      return s && (d = s + d), d;
    }
  }, {
    key: "getNonFormattedNumber",
    value: function() {
      var t = this.state.nationalSignificantNumberMatchesInput;
      return this.getFullNumber(t ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits());
    }
  }, {
    key: "getNonFormattedTemplate",
    value: function() {
      var t = this.getNonFormattedNumber();
      if (t)
        return t.replace(/[\+\d]/g, H);
    }
  }, {
    key: "isCountryCallingCodeAmbiguous",
    value: function() {
      var t = this.state.callingCode, a = this.metadata.getCountryCodesForCallingCode(t);
      return a && a.length > 1;
    }
    // Determines the country of the phone number
    // entered so far based on the country phone code
    // and the national phone number.
  }, {
    key: "determineTheCountry",
    value: function() {
      this.state.setCountry(ja(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, {
        nationalNumber: this.state.nationalSignificantNumber,
        defaultCountry: this.defaultCountry,
        metadata: this.metadata
      }));
    }
    /**
     * Returns a E.164 phone number value for the user's input.
     *
     * For example, for country `"US"` and input `"(222) 333-4444"`
     * it will return `"+12223334444"`.
     *
     * For international phone number input, it will also auto-correct
     * some minor errors such as using a national prefix when writing
     * an international phone number. For example, if the user inputs
     * `"+44 0 7400 000000"` then it will return an auto-corrected
     * `"+447400000000"` phone number value.
     *
     * Will return `undefined` if no digits have been input,
     * or when inputting a phone number in national format and no
     * default country or default "country calling code" have been set.
     *
     * @return {string} [value]
     */
  }, {
    key: "getNumberValue",
    value: function() {
      var t = this.state, a = t.digits, r = t.callingCode, i = t.country, d = t.nationalSignificantNumber;
      if (a) {
        if (this.isInternational())
          return r ? "+" + r + d : "+" + a;
        if (i || r) {
          var s = i ? this.metadata.countryCallingCode() : r;
          return "+" + s + d;
        }
      }
    }
    /**
     * Returns an instance of `PhoneNumber` class.
     * Will return `undefined` if no national (significant) number
     * digits have been entered so far, or if no `defaultCountry` has been
     * set and the user enters a phone number not in international format.
     */
  }, {
    key: "getNumber",
    value: function() {
      var t = this.state, a = t.nationalSignificantNumber, r = t.carrierCode, i = t.callingCode, d = this._getCountry();
      if (a && !(!d && !i)) {
        if (d && d === this.defaultCountry) {
          var s = new D(this.metadata.metadata);
          s.selectNumberingPlan(d);
          var u = s.numberingPlan.callingCode(), l = this.metadata.getCountryCodesForCallingCode(u);
          if (l.length > 1) {
            var c = La(a, {
              countries: l,
              defaultCountry: this.defaultCountry,
              metadata: this.metadata.metadata
            });
            c && (d = c);
          }
        }
        var g = new ka(d || i, a, this.metadata.metadata);
        return r && (g.carrierCode = r), g;
      }
    }
    /**
     * Returns `true` if the phone number is "possible".
     * Is just a shortcut for `PhoneNumber.isPossible()`.
     * @return {boolean}
     */
  }, {
    key: "isPossible",
    value: function() {
      var t = this.getNumber();
      return t ? t.isPossible() : !1;
    }
    /**
     * Returns `true` if the phone number is "valid".
     * Is just a shortcut for `PhoneNumber.isValid()`.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    value: function() {
      var t = this.getNumber();
      return t ? t.isValid() : !1;
    }
    /**
     * @deprecated
     * This method is used in `react-phone-number-input/source/input-control.js`
     * in versions before `3.0.16`.
     */
  }, {
    key: "getNationalNumber",
    value: function() {
      return this.state.nationalSignificantNumber;
    }
    /**
     * Returns the phone number characters entered by the user.
     * @return {string}
     */
  }, {
    key: "getChars",
    value: function() {
      return (this.state.international ? "+" : "") + this.state.digits;
    }
    /**
     * Returns the template for the formatted phone number.
     * @return {string}
     */
  }, {
    key: "getTemplate",
    value: function() {
      return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || "";
    }
  }]), n;
}();
function Ha() {
  return Xt(Id, arguments);
}
function ws() {
  return Xt(wd, arguments);
}
function rt(n) {
  return Va.call(this, n, Ca);
}
rt.prototype = Object.create(Va.prototype, {});
rt.prototype.constructor = rt;
function Ht() {
  return Xt(gt, arguments);
}
var E;
(function(n) {
  n.assertEqual = (r) => r;
  function e(r) {
  }
  n.assertIs = e;
  function t(r) {
    throw new Error();
  }
  n.assertNever = t, n.arrayToEnum = (r) => {
    const i = {};
    for (const d of r)
      i[d] = d;
    return i;
  }, n.getValidEnumValues = (r) => {
    const i = n.objectKeys(r).filter((s) => typeof r[r[s]] != "number"), d = {};
    for (const s of i)
      d[s] = r[s];
    return n.objectValues(d);
  }, n.objectValues = (r) => n.objectKeys(r).map(function(i) {
    return r[i];
  }), n.objectKeys = typeof Object.keys == "function" ? (r) => Object.keys(r) : (r) => {
    const i = [];
    for (const d in r)
      Object.prototype.hasOwnProperty.call(r, d) && i.push(d);
    return i;
  }, n.find = (r, i) => {
    for (const d of r)
      if (i(d))
        return d;
  }, n.isInteger = typeof Number.isInteger == "function" ? (r) => Number.isInteger(r) : (r) => typeof r == "number" && isFinite(r) && Math.floor(r) === r;
  function a(r, i = " | ") {
    return r.map((d) => typeof d == "string" ? `'${d}'` : d).join(i);
  }
  n.joinValues = a, n.jsonStringifyReplacer = (r, i) => typeof i == "bigint" ? i.toString() : i;
})(E || (E = {}));
var Wt;
(function(n) {
  n.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Wt || (Wt = {}));
const m = E.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), oe = (n) => {
  switch (typeof n) {
    case "undefined":
      return m.undefined;
    case "string":
      return m.string;
    case "number":
      return isNaN(n) ? m.nan : m.number;
    case "boolean":
      return m.boolean;
    case "function":
      return m.function;
    case "bigint":
      return m.bigint;
    case "symbol":
      return m.symbol;
    case "object":
      return Array.isArray(n) ? m.array : n === null ? m.null : n.then && typeof n.then == "function" && n.catch && typeof n.catch == "function" ? m.promise : typeof Map < "u" && n instanceof Map ? m.map : typeof Set < "u" && n instanceof Set ? m.set : typeof Date < "u" && n instanceof Date ? m.date : m.object;
    default:
      return m.unknown;
  }
}, h = E.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), As = (n) => JSON.stringify(n, null, 2).replace(/"([^"]+)":/g, "$1:");
class Y extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (a) => {
      this.issues = [...this.issues, a];
    }, this.addIssues = (a = []) => {
      this.issues = [...this.issues, ...a];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const t = e || function(i) {
      return i.message;
    }, a = { _errors: [] }, r = (i) => {
      for (const d of i.issues)
        if (d.code === "invalid_union")
          d.unionErrors.map(r);
        else if (d.code === "invalid_return_type")
          r(d.returnTypeError);
        else if (d.code === "invalid_arguments")
          r(d.argumentsError);
        else if (d.path.length === 0)
          a._errors.push(t(d));
        else {
          let s = a, u = 0;
          for (; u < d.path.length; ) {
            const l = d.path[u];
            u === d.path.length - 1 ? (s[l] = s[l] || { _errors: [] }, s[l]._errors.push(t(d))) : s[l] = s[l] || { _errors: [] }, s = s[l], u++;
          }
        }
    };
    return r(this), a;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, E.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, a = [];
    for (const r of this.issues)
      r.path.length > 0 ? (t[r.path[0]] = t[r.path[0]] || [], t[r.path[0]].push(e(r))) : a.push(e(r));
    return { formErrors: a, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
Y.create = (n) => new Y(n);
const ke = (n, e) => {
  let t;
  switch (n.code) {
    case h.invalid_type:
      n.received === m.undefined ? t = "Required" : t = `Expected ${n.expected}, received ${n.received}`;
      break;
    case h.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(n.expected, E.jsonStringifyReplacer)}`;
      break;
    case h.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${E.joinValues(n.keys, ", ")}`;
      break;
    case h.invalid_union:
      t = "Invalid input";
      break;
    case h.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${E.joinValues(n.options)}`;
      break;
    case h.invalid_enum_value:
      t = `Invalid enum value. Expected ${E.joinValues(n.options)}, received '${n.received}'`;
      break;
    case h.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case h.invalid_return_type:
      t = "Invalid function return type";
      break;
    case h.invalid_date:
      t = "Invalid date";
      break;
    case h.invalid_string:
      typeof n.validation == "object" ? "includes" in n.validation ? (t = `Invalid input: must include "${n.validation.includes}"`, typeof n.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${n.validation.position}`)) : "startsWith" in n.validation ? t = `Invalid input: must start with "${n.validation.startsWith}"` : "endsWith" in n.validation ? t = `Invalid input: must end with "${n.validation.endsWith}"` : E.assertNever(n.validation) : n.validation !== "regex" ? t = `Invalid ${n.validation}` : t = "Invalid";
      break;
    case h.too_small:
      n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}` : t = "Invalid input";
      break;
    case h.too_big:
      n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "bigint" ? t = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}` : t = "Invalid input";
      break;
    case h.custom:
      t = "Invalid input";
      break;
    case h.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case h.not_multiple_of:
      t = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case h.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, E.assertNever(n);
  }
  return { message: t };
};
let Wa = ke;
function Rs(n) {
  Wa = n;
}
function it() {
  return Wa;
}
const dt = (n) => {
  const { data: e, path: t, errorMaps: a, issueData: r } = n, i = [...t, ...r.path || []], d = {
    ...r,
    path: i
  };
  let s = "";
  const u = a.filter((l) => !!l).slice().reverse();
  for (const l of u)
    s = l(d, { data: e, defaultError: s }).message;
  return {
    ...r,
    path: i,
    message: r.message || s
  };
}, ks = [];
function p(n, e) {
  const t = dt({
    issueData: e,
    data: n.data,
    path: n.path,
    errorMaps: [
      n.common.contextualErrorMap,
      n.schemaErrorMap,
      it(),
      ke
      // then global default map
    ].filter((a) => !!a)
  });
  n.common.issues.push(t);
}
class L {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const a = [];
    for (const r of t) {
      if (r.status === "aborted")
        return N;
      r.status === "dirty" && e.dirty(), a.push(r.value);
    }
    return { status: e.value, value: a };
  }
  static async mergeObjectAsync(e, t) {
    const a = [];
    for (const r of t)
      a.push({
        key: await r.key,
        value: await r.value
      });
    return L.mergeObjectSync(e, a);
  }
  static mergeObjectSync(e, t) {
    const a = {};
    for (const r of t) {
      const { key: i, value: d } = r;
      if (i.status === "aborted" || d.status === "aborted")
        return N;
      i.status === "dirty" && e.dirty(), d.status === "dirty" && e.dirty(), i.value !== "__proto__" && (typeof d.value < "u" || r.alwaysSet) && (a[i.value] = d.value);
    }
    return { status: e.value, value: a };
  }
}
const N = Object.freeze({
  status: "aborted"
}), Ka = (n) => ({ status: "dirty", value: n }), U = (n) => ({ status: "valid", value: n }), Kt = (n) => n.status === "aborted", Yt = (n) => n.status === "dirty", Fe = (n) => n.status === "valid", st = (n) => typeof Promise < "u" && n instanceof Promise;
var v;
(function(n) {
  n.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, n.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(v || (v = {}));
class Q {
  constructor(e, t, a, r) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = a, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const ga = (n, e) => {
  if (Fe(e))
    return { success: !0, data: e.value };
  if (!n.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new Y(n.common.issues);
      return this._error = t, this._error;
    }
  };
};
function C(n) {
  if (!n)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: a, description: r } = n;
  if (e && (t || a))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: r } : { errorMap: (d, s) => d.code !== "invalid_type" ? { message: s.defaultError } : typeof s.data > "u" ? { message: a ?? s.defaultError } : { message: t ?? s.defaultError }, description: r };
}
class P {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return oe(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: oe(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new L(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: oe(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (st(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const a = this.safeParse(e, t);
    if (a.success)
      return a.data;
    throw a.error;
  }
  safeParse(e, t) {
    var a;
    const r = {
      common: {
        issues: [],
        async: (a = t == null ? void 0 : t.async) !== null && a !== void 0 ? a : !1,
        contextualErrorMap: t == null ? void 0 : t.errorMap
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: oe(e)
    }, i = this._parseSync({ data: e, path: r.path, parent: r });
    return ga(r, i);
  }
  async parseAsync(e, t) {
    const a = await this.safeParseAsync(e, t);
    if (a.success)
      return a.data;
    throw a.error;
  }
  async safeParseAsync(e, t) {
    const a = {
      common: {
        issues: [],
        contextualErrorMap: t == null ? void 0 : t.errorMap,
        async: !0
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: oe(e)
    }, r = this._parse({ data: e, path: a.path, parent: a }), i = await (st(r) ? r : Promise.resolve(r));
    return ga(a, i);
  }
  refine(e, t) {
    const a = (r) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(r) : t;
    return this._refinement((r, i) => {
      const d = e(r), s = () => i.addIssue({
        code: h.custom,
        ...a(r)
      });
      return typeof Promise < "u" && d instanceof Promise ? d.then((u) => u ? !0 : (s(), !1)) : d ? !0 : (s(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((a, r) => e(a) ? !0 : (r.addIssue(typeof t == "function" ? t(a, r) : t), !1));
  }
  _refinement(e) {
    return new J({
      schema: this,
      typeName: b.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return re.create(this, this._def);
  }
  nullable() {
    return ye.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return z.create(this, this._def);
  }
  promise() {
    return xe.create(this, this._def);
  }
  or(e) {
    return je.create([this, e], this._def);
  }
  and(e) {
    return Be.create(this, e, this._def);
  }
  transform(e) {
    return new J({
      ...C(this._def),
      schema: this,
      typeName: b.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new He({
      ...C(this._def),
      innerType: this,
      defaultValue: t,
      typeName: b.ZodDefault
    });
  }
  brand() {
    return new za({
      typeName: b.ZodBranded,
      type: this,
      ...C(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new ct({
      ...C(this._def),
      innerType: this,
      catchValue: t,
      typeName: b.ZodCatch
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return We.create(this, e);
  }
  readonly() {
    return ht.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Fs = /^c[^\s-]{8,}$/i, Ms = /^[a-z][a-z0-9]*$/, Ds = /^[0-9A-HJKMNP-TV-Z]{26}$/, Ls = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, js = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Bs = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let kt;
const Gs = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Us = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Zs = (n) => n.precision ? n.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}Z$`) : n.precision === 0 ? n.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : n.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Vs(n, e) {
  return !!((e === "v4" || !e) && Gs.test(n) || (e === "v6" || !e) && Us.test(n));
}
class W extends P {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== m.string) {
      const i = this._getOrReturnCtx(e);
      return p(
        i,
        {
          code: h.invalid_type,
          expected: m.string,
          received: i.parsedType
        }
        //
      ), N;
    }
    const a = new L();
    let r;
    for (const i of this._def.checks)
      if (i.kind === "min")
        e.data.length < i.value && (r = this._getOrReturnCtx(e, r), p(r, {
          code: h.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), a.dirty());
      else if (i.kind === "max")
        e.data.length > i.value && (r = this._getOrReturnCtx(e, r), p(r, {
          code: h.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), a.dirty());
      else if (i.kind === "length") {
        const d = e.data.length > i.value, s = e.data.length < i.value;
        (d || s) && (r = this._getOrReturnCtx(e, r), d ? p(r, {
          code: h.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : s && p(r, {
          code: h.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), a.dirty());
      } else if (i.kind === "email")
        js.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "email",
          code: h.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "emoji")
        kt || (kt = new RegExp(Bs, "u")), kt.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "emoji",
          code: h.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "uuid")
        Ls.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "uuid",
          code: h.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "cuid")
        Fs.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "cuid",
          code: h.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "cuid2")
        Ms.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "cuid2",
          code: h.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "ulid")
        Ds.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "ulid",
          code: h.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          r = this._getOrReturnCtx(e, r), p(r, {
            validation: "url",
            code: h.invalid_string,
            message: i.message
          }), a.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "regex",
          code: h.invalid_string,
          message: i.message
        }), a.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (r = this._getOrReturnCtx(e, r), p(r, {
          code: h.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), a.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (r = this._getOrReturnCtx(e, r), p(r, {
          code: h.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), a.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (r = this._getOrReturnCtx(e, r), p(r, {
          code: h.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), a.dirty()) : i.kind === "datetime" ? Zs(i).test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          code: h.invalid_string,
          validation: "datetime",
          message: i.message
        }), a.dirty()) : i.kind === "ip" ? Vs(e.data, i.version) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "ip",
          code: h.invalid_string,
          message: i.message
        }), a.dirty()) : E.assertNever(i);
    return { status: a.value, value: e.data };
  }
  _regex(e, t, a) {
    return this.refinement((r) => e.test(r), {
      validation: t,
      code: h.invalid_string,
      ...v.errToObj(a)
    });
  }
  _addCheck(e) {
    return new W({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...v.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...v.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...v.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...v.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...v.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...v.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...v.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...v.errToObj(e) });
  }
  datetime(e) {
    var t;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (t = e == null ? void 0 : e.offset) !== null && t !== void 0 ? t : !1,
      ...v.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...v.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...v.errToObj(t == null ? void 0 : t.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...v.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...v.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...v.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...v.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...v.errToObj(t)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, v.errToObj(e));
  }
  trim() {
    return new W({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new W({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new W({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
W.create = (n) => {
  var e;
  return new W({
    checks: [],
    typeName: b.ZodString,
    coerce: (e = n == null ? void 0 : n.coerce) !== null && e !== void 0 ? e : !1,
    ...C(n)
  });
};
function Hs(n, e) {
  const t = (n.toString().split(".")[1] || "").length, a = (e.toString().split(".")[1] || "").length, r = t > a ? t : a, i = parseInt(n.toFixed(r).replace(".", "")), d = parseInt(e.toFixed(r).replace(".", ""));
  return i % d / Math.pow(10, r);
}
class le extends P {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== m.number) {
      const i = this._getOrReturnCtx(e);
      return p(i, {
        code: h.invalid_type,
        expected: m.number,
        received: i.parsedType
      }), N;
    }
    let a;
    const r = new L();
    for (const i of this._def.checks)
      i.kind === "int" ? E.isInteger(e.data) || (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), r.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), r.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), r.dirty()) : i.kind === "multipleOf" ? Hs(e.data, i.value) !== 0 && (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), r.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.not_finite,
        message: i.message
      }), r.dirty()) : E.assertNever(i);
    return { status: r.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, v.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, v.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, v.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, v.toString(t));
  }
  setLimit(e, t, a, r) {
    return new le({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: a,
          message: v.toString(r)
        }
      ]
    });
  }
  _addCheck(e) {
    return new le({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: v.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: v.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: v.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: v.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: v.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: v.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: v.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: v.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: v.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && E.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const a of this._def.checks) {
      if (a.kind === "finite" || a.kind === "int" || a.kind === "multipleOf")
        return !0;
      a.kind === "min" ? (t === null || a.value > t) && (t = a.value) : a.kind === "max" && (e === null || a.value < e) && (e = a.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
le.create = (n) => new le({
  checks: [],
  typeName: b.ZodNumber,
  coerce: (n == null ? void 0 : n.coerce) || !1,
  ...C(n)
});
class ce extends P {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== m.bigint) {
      const i = this._getOrReturnCtx(e);
      return p(i, {
        code: h.invalid_type,
        expected: m.bigint,
        received: i.parsedType
      }), N;
    }
    let a;
    const r = new L();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), r.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), r.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), r.dirty()) : E.assertNever(i);
    return { status: r.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, v.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, v.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, v.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, v.toString(t));
  }
  setLimit(e, t, a, r) {
    return new ce({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: a,
          message: v.toString(r)
        }
      ]
    });
  }
  _addCheck(e) {
    return new ce({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: v.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: v.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: v.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: v.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: v.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
ce.create = (n) => {
  var e;
  return new ce({
    checks: [],
    typeName: b.ZodBigInt,
    coerce: (e = n == null ? void 0 : n.coerce) !== null && e !== void 0 ? e : !1,
    ...C(n)
  });
};
class Me extends P {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== m.boolean) {
      const a = this._getOrReturnCtx(e);
      return p(a, {
        code: h.invalid_type,
        expected: m.boolean,
        received: a.parsedType
      }), N;
    }
    return U(e.data);
  }
}
Me.create = (n) => new Me({
  typeName: b.ZodBoolean,
  coerce: (n == null ? void 0 : n.coerce) || !1,
  ...C(n)
});
class pe extends P {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== m.date) {
      const i = this._getOrReturnCtx(e);
      return p(i, {
        code: h.invalid_type,
        expected: m.date,
        received: i.parsedType
      }), N;
    }
    if (isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return p(i, {
        code: h.invalid_date
      }), N;
    }
    const a = new L();
    let r;
    for (const i of this._def.checks)
      i.kind === "min" ? e.data.getTime() < i.value && (r = this._getOrReturnCtx(e, r), p(r, {
        code: h.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), a.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (r = this._getOrReturnCtx(e, r), p(r, {
        code: h.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), a.dirty()) : E.assertNever(i);
    return {
      status: a.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new pe({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: v.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: v.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
pe.create = (n) => new pe({
  checks: [],
  coerce: (n == null ? void 0 : n.coerce) || !1,
  typeName: b.ZodDate,
  ...C(n)
});
class ot extends P {
  _parse(e) {
    if (this._getType(e) !== m.symbol) {
      const a = this._getOrReturnCtx(e);
      return p(a, {
        code: h.invalid_type,
        expected: m.symbol,
        received: a.parsedType
      }), N;
    }
    return U(e.data);
  }
}
ot.create = (n) => new ot({
  typeName: b.ZodSymbol,
  ...C(n)
});
class De extends P {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const a = this._getOrReturnCtx(e);
      return p(a, {
        code: h.invalid_type,
        expected: m.undefined,
        received: a.parsedType
      }), N;
    }
    return U(e.data);
  }
}
De.create = (n) => new De({
  typeName: b.ZodUndefined,
  ...C(n)
});
class Le extends P {
  _parse(e) {
    if (this._getType(e) !== m.null) {
      const a = this._getOrReturnCtx(e);
      return p(a, {
        code: h.invalid_type,
        expected: m.null,
        received: a.parsedType
      }), N;
    }
    return U(e.data);
  }
}
Le.create = (n) => new Le({
  typeName: b.ZodNull,
  ...C(n)
});
class Pe extends P {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return U(e.data);
  }
}
Pe.create = (n) => new Pe({
  typeName: b.ZodAny,
  ...C(n)
});
class me extends P {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return U(e.data);
  }
}
me.create = (n) => new me({
  typeName: b.ZodUnknown,
  ...C(n)
});
class de extends P {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return p(t, {
      code: h.invalid_type,
      expected: m.never,
      received: t.parsedType
    }), N;
  }
}
de.create = (n) => new de({
  typeName: b.ZodNever,
  ...C(n)
});
class ut extends P {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const a = this._getOrReturnCtx(e);
      return p(a, {
        code: h.invalid_type,
        expected: m.void,
        received: a.parsedType
      }), N;
    }
    return U(e.data);
  }
}
ut.create = (n) => new ut({
  typeName: b.ZodVoid,
  ...C(n)
});
class z extends P {
  _parse(e) {
    const { ctx: t, status: a } = this._processInputParams(e), r = this._def;
    if (t.parsedType !== m.array)
      return p(t, {
        code: h.invalid_type,
        expected: m.array,
        received: t.parsedType
      }), N;
    if (r.exactLength !== null) {
      const d = t.data.length > r.exactLength.value, s = t.data.length < r.exactLength.value;
      (d || s) && (p(t, {
        code: d ? h.too_big : h.too_small,
        minimum: s ? r.exactLength.value : void 0,
        maximum: d ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), a.dirty());
    }
    if (r.minLength !== null && t.data.length < r.minLength.value && (p(t, {
      code: h.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), a.dirty()), r.maxLength !== null && t.data.length > r.maxLength.value && (p(t, {
      code: h.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), a.dirty()), t.common.async)
      return Promise.all([...t.data].map((d, s) => r.type._parseAsync(new Q(t, d, t.path, s)))).then((d) => L.mergeArray(a, d));
    const i = [...t.data].map((d, s) => r.type._parseSync(new Q(t, d, t.path, s)));
    return L.mergeArray(a, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new z({
      ...this._def,
      minLength: { value: e, message: v.toString(t) }
    });
  }
  max(e, t) {
    return new z({
      ...this._def,
      maxLength: { value: e, message: v.toString(t) }
    });
  }
  length(e, t) {
    return new z({
      ...this._def,
      exactLength: { value: e, message: v.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
z.create = (n, e) => new z({
  type: n,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: b.ZodArray,
  ...C(e)
});
function Ne(n) {
  if (n instanceof A) {
    const e = {};
    for (const t in n.shape) {
      const a = n.shape[t];
      e[t] = re.create(Ne(a));
    }
    return new A({
      ...n._def,
      shape: () => e
    });
  } else
    return n instanceof z ? new z({
      ...n._def,
      type: Ne(n.element)
    }) : n instanceof re ? re.create(Ne(n.unwrap())) : n instanceof ye ? ye.create(Ne(n.unwrap())) : n instanceof ee ? ee.create(n.items.map((e) => Ne(e))) : n;
}
class A extends P {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = E.objectKeys(e);
    return this._cached = { shape: e, keys: t };
  }
  _parse(e) {
    if (this._getType(e) !== m.object) {
      const l = this._getOrReturnCtx(e);
      return p(l, {
        code: h.invalid_type,
        expected: m.object,
        received: l.parsedType
      }), N;
    }
    const { status: a, ctx: r } = this._processInputParams(e), { shape: i, keys: d } = this._getCached(), s = [];
    if (!(this._def.catchall instanceof de && this._def.unknownKeys === "strip"))
      for (const l in r.data)
        d.includes(l) || s.push(l);
    const u = [];
    for (const l of d) {
      const c = i[l], g = r.data[l];
      u.push({
        key: { status: "valid", value: l },
        value: c._parse(new Q(r, g, r.path, l)),
        alwaysSet: l in r.data
      });
    }
    if (this._def.catchall instanceof de) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const c of s)
          u.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: r.data[c] }
          });
      else if (l === "strict")
        s.length > 0 && (p(r, {
          code: h.unrecognized_keys,
          keys: s
        }), a.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const c of s) {
        const g = r.data[c];
        u.push({
          key: { status: "valid", value: c },
          value: l._parse(
            new Q(r, g, r.path, c)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: c in r.data
        });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const c of u) {
        const g = await c.key;
        l.push({
          key: g,
          value: await c.value,
          alwaysSet: c.alwaysSet
        });
      }
      return l;
    }).then((l) => L.mergeObjectSync(a, l)) : L.mergeObjectSync(a, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return v.errToObj, new A({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, a) => {
          var r, i, d, s;
          const u = (d = (i = (r = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(r, t, a).message) !== null && d !== void 0 ? d : a.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: (s = v.errToObj(e).message) !== null && s !== void 0 ? s : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new A({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new A({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new A({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new A({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: b.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new A({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    return E.objectKeys(e).forEach((a) => {
      e[a] && this.shape[a] && (t[a] = this.shape[a]);
    }), new A({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    return E.objectKeys(this.shape).forEach((a) => {
      e[a] || (t[a] = this.shape[a]);
    }), new A({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Ne(this);
  }
  partial(e) {
    const t = {};
    return E.objectKeys(this.shape).forEach((a) => {
      const r = this.shape[a];
      e && !e[a] ? t[a] = r : t[a] = r.optional();
    }), new A({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    return E.objectKeys(this.shape).forEach((a) => {
      if (e && !e[a])
        t[a] = this.shape[a];
      else {
        let i = this.shape[a];
        for (; i instanceof re; )
          i = i._def.innerType;
        t[a] = i;
      }
    }), new A({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Ya(E.objectKeys(this.shape));
  }
}
A.create = (n, e) => new A({
  shape: () => n,
  unknownKeys: "strip",
  catchall: de.create(),
  typeName: b.ZodObject,
  ...C(e)
});
A.strictCreate = (n, e) => new A({
  shape: () => n,
  unknownKeys: "strict",
  catchall: de.create(),
  typeName: b.ZodObject,
  ...C(e)
});
A.lazycreate = (n, e) => new A({
  shape: n,
  unknownKeys: "strip",
  catchall: de.create(),
  typeName: b.ZodObject,
  ...C(e)
});
class je extends P {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), a = this._def.options;
    function r(i) {
      for (const s of i)
        if (s.result.status === "valid")
          return s.result;
      for (const s of i)
        if (s.result.status === "dirty")
          return t.common.issues.push(...s.ctx.common.issues), s.result;
      const d = i.map((s) => new Y(s.ctx.common.issues));
      return p(t, {
        code: h.invalid_union,
        unionErrors: d
      }), N;
    }
    if (t.common.async)
      return Promise.all(a.map(async (i) => {
        const d = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: t.data,
            path: t.path,
            parent: d
          }),
          ctx: d
        };
      })).then(r);
    {
      let i;
      const d = [];
      for (const u of a) {
        const l = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, c = u._parseSync({
          data: t.data,
          path: t.path,
          parent: l
        });
        if (c.status === "valid")
          return c;
        c.status === "dirty" && !i && (i = { result: c, ctx: l }), l.common.issues.length && d.push(l.common.issues);
      }
      if (i)
        return t.common.issues.push(...i.ctx.common.issues), i.result;
      const s = d.map((u) => new Y(u));
      return p(t, {
        code: h.invalid_union,
        unionErrors: s
      }), N;
    }
  }
  get options() {
    return this._def.options;
  }
}
je.create = (n, e) => new je({
  options: n,
  typeName: b.ZodUnion,
  ...C(e)
});
const tt = (n) => n instanceof Ue ? tt(n.schema) : n instanceof J ? tt(n.innerType()) : n instanceof Ze ? [n.value] : n instanceof fe ? n.options : n instanceof Ve ? Object.keys(n.enum) : n instanceof He ? tt(n._def.innerType) : n instanceof De ? [void 0] : n instanceof Le ? [null] : null;
class vt extends P {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== m.object)
      return p(t, {
        code: h.invalid_type,
        expected: m.object,
        received: t.parsedType
      }), N;
    const a = this.discriminator, r = t.data[a], i = this.optionsMap.get(r);
    return i ? t.common.async ? i._parseAsync({
      data: t.data,
      path: t.path,
      parent: t
    }) : i._parseSync({
      data: t.data,
      path: t.path,
      parent: t
    }) : (p(t, {
      code: h.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [a]
    }), N);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, t, a) {
    const r = /* @__PURE__ */ new Map();
    for (const i of t) {
      const d = tt(i.shape[e]);
      if (!d)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const s of d) {
        if (r.has(s))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`);
        r.set(s, i);
      }
    }
    return new vt({
      typeName: b.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: r,
      ...C(a)
    });
  }
}
function zt(n, e) {
  const t = oe(n), a = oe(e);
  if (n === e)
    return { valid: !0, data: n };
  if (t === m.object && a === m.object) {
    const r = E.objectKeys(e), i = E.objectKeys(n).filter((s) => r.indexOf(s) !== -1), d = { ...n, ...e };
    for (const s of i) {
      const u = zt(n[s], e[s]);
      if (!u.valid)
        return { valid: !1 };
      d[s] = u.data;
    }
    return { valid: !0, data: d };
  } else if (t === m.array && a === m.array) {
    if (n.length !== e.length)
      return { valid: !1 };
    const r = [];
    for (let i = 0; i < n.length; i++) {
      const d = n[i], s = e[i], u = zt(d, s);
      if (!u.valid)
        return { valid: !1 };
      r.push(u.data);
    }
    return { valid: !0, data: r };
  } else
    return t === m.date && a === m.date && +n == +e ? { valid: !0, data: n } : { valid: !1 };
}
class Be extends P {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e), r = (i, d) => {
      if (Kt(i) || Kt(d))
        return N;
      const s = zt(i.value, d.value);
      return s.valid ? ((Yt(i) || Yt(d)) && t.dirty(), { status: t.value, value: s.data }) : (p(a, {
        code: h.invalid_intersection_types
      }), N);
    };
    return a.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: a.data,
        path: a.path,
        parent: a
      }),
      this._def.right._parseAsync({
        data: a.data,
        path: a.path,
        parent: a
      })
    ]).then(([i, d]) => r(i, d)) : r(this._def.left._parseSync({
      data: a.data,
      path: a.path,
      parent: a
    }), this._def.right._parseSync({
      data: a.data,
      path: a.path,
      parent: a
    }));
  }
}
Be.create = (n, e, t) => new Be({
  left: n,
  right: e,
  typeName: b.ZodIntersection,
  ...C(t)
});
class ee extends P {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== m.array)
      return p(a, {
        code: h.invalid_type,
        expected: m.array,
        received: a.parsedType
      }), N;
    if (a.data.length < this._def.items.length)
      return p(a, {
        code: h.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), N;
    !this._def.rest && a.data.length > this._def.items.length && (p(a, {
      code: h.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const i = [...a.data].map((d, s) => {
      const u = this._def.items[s] || this._def.rest;
      return u ? u._parse(new Q(a, d, a.path, s)) : null;
    }).filter((d) => !!d);
    return a.common.async ? Promise.all(i).then((d) => L.mergeArray(t, d)) : L.mergeArray(t, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new ee({
      ...this._def,
      rest: e
    });
  }
}
ee.create = (n, e) => {
  if (!Array.isArray(n))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ee({
    items: n,
    typeName: b.ZodTuple,
    rest: null,
    ...C(e)
  });
};
class Ge extends P {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== m.object)
      return p(a, {
        code: h.invalid_type,
        expected: m.object,
        received: a.parsedType
      }), N;
    const r = [], i = this._def.keyType, d = this._def.valueType;
    for (const s in a.data)
      r.push({
        key: i._parse(new Q(a, s, a.path, s)),
        value: d._parse(new Q(a, a.data[s], a.path, s))
      });
    return a.common.async ? L.mergeObjectAsync(t, r) : L.mergeObjectSync(t, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, a) {
    return t instanceof P ? new Ge({
      keyType: e,
      valueType: t,
      typeName: b.ZodRecord,
      ...C(a)
    }) : new Ge({
      keyType: W.create(),
      valueType: e,
      typeName: b.ZodRecord,
      ...C(t)
    });
  }
}
class lt extends P {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== m.map)
      return p(a, {
        code: h.invalid_type,
        expected: m.map,
        received: a.parsedType
      }), N;
    const r = this._def.keyType, i = this._def.valueType, d = [...a.data.entries()].map(([s, u], l) => ({
      key: r._parse(new Q(a, s, a.path, [l, "key"])),
      value: i._parse(new Q(a, u, a.path, [l, "value"]))
    }));
    if (a.common.async) {
      const s = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of d) {
          const l = await u.key, c = await u.value;
          if (l.status === "aborted" || c.status === "aborted")
            return N;
          (l.status === "dirty" || c.status === "dirty") && t.dirty(), s.set(l.value, c.value);
        }
        return { status: t.value, value: s };
      });
    } else {
      const s = /* @__PURE__ */ new Map();
      for (const u of d) {
        const l = u.key, c = u.value;
        if (l.status === "aborted" || c.status === "aborted")
          return N;
        (l.status === "dirty" || c.status === "dirty") && t.dirty(), s.set(l.value, c.value);
      }
      return { status: t.value, value: s };
    }
  }
}
lt.create = (n, e, t) => new lt({
  valueType: e,
  keyType: n,
  typeName: b.ZodMap,
  ...C(t)
});
class ge extends P {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== m.set)
      return p(a, {
        code: h.invalid_type,
        expected: m.set,
        received: a.parsedType
      }), N;
    const r = this._def;
    r.minSize !== null && a.data.size < r.minSize.value && (p(a, {
      code: h.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), t.dirty()), r.maxSize !== null && a.data.size > r.maxSize.value && (p(a, {
      code: h.too_big,
      maximum: r.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.maxSize.message
    }), t.dirty());
    const i = this._def.valueType;
    function d(u) {
      const l = /* @__PURE__ */ new Set();
      for (const c of u) {
        if (c.status === "aborted")
          return N;
        c.status === "dirty" && t.dirty(), l.add(c.value);
      }
      return { status: t.value, value: l };
    }
    const s = [...a.data.values()].map((u, l) => i._parse(new Q(a, u, a.path, l)));
    return a.common.async ? Promise.all(s).then((u) => d(u)) : d(s);
  }
  min(e, t) {
    return new ge({
      ...this._def,
      minSize: { value: e, message: v.toString(t) }
    });
  }
  max(e, t) {
    return new ge({
      ...this._def,
      maxSize: { value: e, message: v.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
ge.create = (n, e) => new ge({
  valueType: n,
  minSize: null,
  maxSize: null,
  typeName: b.ZodSet,
  ...C(e)
});
class Ce extends P {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== m.function)
      return p(t, {
        code: h.invalid_type,
        expected: m.function,
        received: t.parsedType
      }), N;
    function a(s, u) {
      return dt({
        data: s,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          it(),
          ke
        ].filter((l) => !!l),
        issueData: {
          code: h.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function r(s, u) {
      return dt({
        data: s,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          it(),
          ke
        ].filter((l) => !!l),
        issueData: {
          code: h.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const i = { errorMap: t.common.contextualErrorMap }, d = t.data;
    if (this._def.returns instanceof xe) {
      const s = this;
      return U(async function(...u) {
        const l = new Y([]), c = await s._def.args.parseAsync(u, i).catch((S) => {
          throw l.addIssue(a(u, S)), l;
        }), g = await Reflect.apply(d, this, c);
        return await s._def.returns._def.type.parseAsync(g, i).catch((S) => {
          throw l.addIssue(r(g, S)), l;
        });
      });
    } else {
      const s = this;
      return U(function(...u) {
        const l = s._def.args.safeParse(u, i);
        if (!l.success)
          throw new Y([a(u, l.error)]);
        const c = Reflect.apply(d, this, l.data), g = s._def.returns.safeParse(c, i);
        if (!g.success)
          throw new Y([r(c, g.error)]);
        return g.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new Ce({
      ...this._def,
      args: ee.create(e).rest(me.create())
    });
  }
  returns(e) {
    return new Ce({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, a) {
    return new Ce({
      args: e || ee.create([]).rest(me.create()),
      returns: t || me.create(),
      typeName: b.ZodFunction,
      ...C(a)
    });
  }
}
class Ue extends P {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Ue.create = (n, e) => new Ue({
  getter: n,
  typeName: b.ZodLazy,
  ...C(e)
});
class Ze extends P {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return p(t, {
        received: t.data,
        code: h.invalid_literal,
        expected: this._def.value
      }), N;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ze.create = (n, e) => new Ze({
  value: n,
  typeName: b.ZodLiteral,
  ...C(e)
});
function Ya(n, e) {
  return new fe({
    values: n,
    typeName: b.ZodEnum,
    ...C(e)
  });
}
class fe extends P {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), a = this._def.values;
      return p(t, {
        expected: E.joinValues(a),
        received: t.parsedType,
        code: h.invalid_type
      }), N;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const t = this._getOrReturnCtx(e), a = this._def.values;
      return p(t, {
        received: t.data,
        code: h.invalid_enum_value,
        options: a
      }), N;
    }
    return U(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  extract(e) {
    return fe.create(e);
  }
  exclude(e) {
    return fe.create(this.options.filter((t) => !e.includes(t)));
  }
}
fe.create = Ya;
class Ve extends P {
  _parse(e) {
    const t = E.getValidEnumValues(this._def.values), a = this._getOrReturnCtx(e);
    if (a.parsedType !== m.string && a.parsedType !== m.number) {
      const r = E.objectValues(t);
      return p(a, {
        expected: E.joinValues(r),
        received: a.parsedType,
        code: h.invalid_type
      }), N;
    }
    if (t.indexOf(e.data) === -1) {
      const r = E.objectValues(t);
      return p(a, {
        received: a.data,
        code: h.invalid_enum_value,
        options: r
      }), N;
    }
    return U(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ve.create = (n, e) => new Ve({
  values: n,
  typeName: b.ZodNativeEnum,
  ...C(e)
});
class xe extends P {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== m.promise && t.common.async === !1)
      return p(t, {
        code: h.invalid_type,
        expected: m.promise,
        received: t.parsedType
      }), N;
    const a = t.parsedType === m.promise ? t.data : Promise.resolve(t.data);
    return U(a.then((r) => this._def.type.parseAsync(r, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
xe.create = (n, e) => new xe({
  type: n,
  typeName: b.ZodPromise,
  ...C(e)
});
class J extends P {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === b.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e), r = this._def.effect || null, i = {
      addIssue: (d) => {
        p(a, d), d.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return a.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), r.type === "preprocess") {
      const d = r.transform(a.data, i);
      return a.common.issues.length ? {
        status: "dirty",
        value: a.data
      } : a.common.async ? Promise.resolve(d).then((s) => this._def.schema._parseAsync({
        data: s,
        path: a.path,
        parent: a
      })) : this._def.schema._parseSync({
        data: d,
        path: a.path,
        parent: a
      });
    }
    if (r.type === "refinement") {
      const d = (s) => {
        const u = r.refinement(s, i);
        if (a.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return s;
      };
      if (a.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return s.status === "aborted" ? N : (s.status === "dirty" && t.dirty(), d(s.value), { status: t.value, value: s.value });
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((s) => s.status === "aborted" ? N : (s.status === "dirty" && t.dirty(), d(s.value).then(() => ({ status: t.value, value: s.value }))));
    }
    if (r.type === "transform")
      if (a.common.async === !1) {
        const d = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        if (!Fe(d))
          return d;
        const s = r.transform(d.value, i);
        if (s instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: s };
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((d) => Fe(d) ? Promise.resolve(r.transform(d.value, i)).then((s) => ({ status: t.value, value: s })) : d);
    E.assertNever(r);
  }
}
J.create = (n, e, t) => new J({
  schema: n,
  typeName: b.ZodEffects,
  effect: e,
  ...C(t)
});
J.createWithPreprocess = (n, e, t) => new J({
  schema: e,
  effect: { type: "preprocess", transform: n },
  typeName: b.ZodEffects,
  ...C(t)
});
class re extends P {
  _parse(e) {
    return this._getType(e) === m.undefined ? U(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
re.create = (n, e) => new re({
  innerType: n,
  typeName: b.ZodOptional,
  ...C(e)
});
class ye extends P {
  _parse(e) {
    return this._getType(e) === m.null ? U(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ye.create = (n, e) => new ye({
  innerType: n,
  typeName: b.ZodNullable,
  ...C(e)
});
class He extends P {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let a = t.data;
    return t.parsedType === m.undefined && (a = this._def.defaultValue()), this._def.innerType._parse({
      data: a,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
He.create = (n, e) => new He({
  innerType: n,
  typeName: b.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...C(e)
});
class ct extends P {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), a = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, r = this._def.innerType._parse({
      data: a.data,
      path: a.path,
      parent: {
        ...a
      }
    });
    return st(r) ? r.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Y(a.common.issues);
        },
        input: a.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new Y(a.common.issues);
        },
        input: a.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ct.create = (n, e) => new ct({
  innerType: n,
  typeName: b.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...C(e)
});
class ft extends P {
  _parse(e) {
    if (this._getType(e) !== m.nan) {
      const a = this._getOrReturnCtx(e);
      return p(a, {
        code: h.invalid_type,
        expected: m.nan,
        received: a.parsedType
      }), N;
    }
    return { status: "valid", value: e.data };
  }
}
ft.create = (n) => new ft({
  typeName: b.ZodNaN,
  ...C(n)
});
const Ws = Symbol("zod_brand");
class za extends P {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), a = t.data;
    return this._def.type._parse({
      data: a,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class We extends P {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return i.status === "aborted" ? N : i.status === "dirty" ? (t.dirty(), Ka(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: a.path,
          parent: a
        });
      })();
    {
      const r = this._def.in._parseSync({
        data: a.data,
        path: a.path,
        parent: a
      });
      return r.status === "aborted" ? N : r.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: r.value
      }) : this._def.out._parseSync({
        data: r.value,
        path: a.path,
        parent: a
      });
    }
  }
  static create(e, t) {
    return new We({
      in: e,
      out: t,
      typeName: b.ZodPipeline
    });
  }
}
class ht extends P {
  _parse(e) {
    const t = this._def.innerType._parse(e);
    return Fe(t) && (t.value = Object.freeze(t.value)), t;
  }
}
ht.create = (n, e) => new ht({
  innerType: n,
  typeName: b.ZodReadonly,
  ...C(e)
});
const Ja = (n, e = {}, t) => n ? Pe.create().superRefine((a, r) => {
  var i, d;
  if (!n(a)) {
    const s = typeof e == "function" ? e(a) : typeof e == "string" ? { message: e } : e, u = (d = (i = s.fatal) !== null && i !== void 0 ? i : t) !== null && d !== void 0 ? d : !0, l = typeof s == "string" ? { message: s } : s;
    r.addIssue({ code: "custom", ...l, fatal: u });
  }
}) : Pe.create(), Ks = {
  object: A.lazycreate
};
var b;
(function(n) {
  n.ZodString = "ZodString", n.ZodNumber = "ZodNumber", n.ZodNaN = "ZodNaN", n.ZodBigInt = "ZodBigInt", n.ZodBoolean = "ZodBoolean", n.ZodDate = "ZodDate", n.ZodSymbol = "ZodSymbol", n.ZodUndefined = "ZodUndefined", n.ZodNull = "ZodNull", n.ZodAny = "ZodAny", n.ZodUnknown = "ZodUnknown", n.ZodNever = "ZodNever", n.ZodVoid = "ZodVoid", n.ZodArray = "ZodArray", n.ZodObject = "ZodObject", n.ZodUnion = "ZodUnion", n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", n.ZodIntersection = "ZodIntersection", n.ZodTuple = "ZodTuple", n.ZodRecord = "ZodRecord", n.ZodMap = "ZodMap", n.ZodSet = "ZodSet", n.ZodFunction = "ZodFunction", n.ZodLazy = "ZodLazy", n.ZodLiteral = "ZodLiteral", n.ZodEnum = "ZodEnum", n.ZodEffects = "ZodEffects", n.ZodNativeEnum = "ZodNativeEnum", n.ZodOptional = "ZodOptional", n.ZodNullable = "ZodNullable", n.ZodDefault = "ZodDefault", n.ZodCatch = "ZodCatch", n.ZodPromise = "ZodPromise", n.ZodBranded = "ZodBranded", n.ZodPipeline = "ZodPipeline", n.ZodReadonly = "ZodReadonly";
})(b || (b = {}));
const Ys = (n, e = {
  message: `Input not instance of ${n.name}`
}) => Ja((t) => t instanceof n, e), Xa = W.create, qa = le.create, zs = ft.create, Js = ce.create, Qa = Me.create, Xs = pe.create, qs = ot.create, Qs = De.create, eo = Le.create, to = Pe.create, no = me.create, ao = de.create, ro = ut.create, io = z.create, so = A.create, oo = A.strictCreate, uo = je.create, lo = vt.create, co = Be.create, fo = ee.create, ho = Ge.create, $o = lt.create, mo = ge.create, po = Ce.create, go = Ue.create, yo = Ze.create, vo = fe.create, bo = Ve.create, _o = xe.create, ya = J.create, No = re.create, Co = ye.create, Po = J.createWithPreprocess, xo = We.create, To = () => Xa().optional(), So = () => qa().optional(), Eo = () => Qa().optional(), Io = {
  string: (n) => W.create({ ...n, coerce: !0 }),
  number: (n) => le.create({ ...n, coerce: !0 }),
  boolean: (n) => Me.create({
    ...n,
    coerce: !0
  }),
  bigint: (n) => ce.create({ ...n, coerce: !0 }),
  date: (n) => pe.create({ ...n, coerce: !0 })
}, Oo = N;
var wo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ke,
  setErrorMap: Rs,
  getErrorMap: it,
  makeIssue: dt,
  EMPTY_PATH: ks,
  addIssueToContext: p,
  ParseStatus: L,
  INVALID: N,
  DIRTY: Ka,
  OK: U,
  isAborted: Kt,
  isDirty: Yt,
  isValid: Fe,
  isAsync: st,
  get util() {
    return E;
  },
  get objectUtil() {
    return Wt;
  },
  ZodParsedType: m,
  getParsedType: oe,
  ZodType: P,
  ZodString: W,
  ZodNumber: le,
  ZodBigInt: ce,
  ZodBoolean: Me,
  ZodDate: pe,
  ZodSymbol: ot,
  ZodUndefined: De,
  ZodNull: Le,
  ZodAny: Pe,
  ZodUnknown: me,
  ZodNever: de,
  ZodVoid: ut,
  ZodArray: z,
  ZodObject: A,
  ZodUnion: je,
  ZodDiscriminatedUnion: vt,
  ZodIntersection: Be,
  ZodTuple: ee,
  ZodRecord: Ge,
  ZodMap: lt,
  ZodSet: ge,
  ZodFunction: Ce,
  ZodLazy: Ue,
  ZodLiteral: Ze,
  ZodEnum: fe,
  ZodNativeEnum: Ve,
  ZodPromise: xe,
  ZodEffects: J,
  ZodTransformer: J,
  ZodOptional: re,
  ZodNullable: ye,
  ZodDefault: He,
  ZodCatch: ct,
  ZodNaN: ft,
  BRAND: Ws,
  ZodBranded: za,
  ZodPipeline: We,
  ZodReadonly: ht,
  custom: Ja,
  Schema: P,
  ZodSchema: P,
  late: Ks,
  get ZodFirstPartyTypeKind() {
    return b;
  },
  coerce: Io,
  any: to,
  array: io,
  bigint: Js,
  boolean: Qa,
  date: Xs,
  discriminatedUnion: lo,
  effect: ya,
  enum: vo,
  function: po,
  instanceof: Ys,
  intersection: co,
  lazy: go,
  literal: yo,
  map: $o,
  nan: zs,
  nativeEnum: bo,
  never: ao,
  null: eo,
  nullable: Co,
  number: qa,
  object: so,
  oboolean: Eo,
  onumber: So,
  optional: No,
  ostring: To,
  pipeline: xo,
  preprocess: Po,
  promise: _o,
  record: ho,
  set: mo,
  strictObject: oo,
  string: Xa,
  symbol: qs,
  transformer: ya,
  tuple: fo,
  undefined: Qs,
  union: uo,
  unknown: no,
  void: ro,
  NEVER: Oo,
  ZodIssueCode: h,
  quotelessJson: As,
  ZodError: Y
});
const Ao = ({ invalid: n, required: e } = {
  invalid: "Invalid phone number",
  required: "Phone number is required"
}) => wo.string({
  required_error: e
}).refine((t) => {
  try {
    return ws(t);
  } catch {
    return !1;
  }
}, n);
function Ro(n) {
  const e = Ha(n);
  return e ? e.country : "";
}
function er(n, e) {
  const t = Ha(n);
  if (!t) {
    try {
      const a = Ht(e);
      if (a)
        return `+${a}`;
    } catch {
      return t;
    }
    return t;
  }
  return t.formatInternational();
}
const ko = ({
  initialCountry: n = "US",
  initialPhoneNumber: e = ""
} = {}) => {
  const [t, a] = X(
    Ro(e) || n
  ), [r, i] = X(
    er(e, n)
  ), [d, s] = X(
    Ao().safeParse(e).success
  );
  return {
    country: t,
    countryList: Dr,
    handleCountryChange: (c) => {
      a(c);
      try {
        const g = Ht(c);
        i(`+${g}`);
      } catch {
        i("");
      }
      s(!1);
    },
    handlePhoneNumberChange: (c) => {
      let g = c;
      if (g.trim() === "")
        return i(""), a(n), s(!1), "";
      g[0] !== "+" && (g = `+${g}`);
      const y = new rt(t), S = y.input(g);
      i(S);
      const R = y.getNumber();
      if (R) {
        const M = R.country;
        M && M !== t && a(M), s(R.isValid());
      } else
        g === `+${Ht(t)}` && a(t), s(!1);
      return S;
    },
    isValid: d,
    phoneNumber: r
  };
};
var Jt = { exports: {} }, Ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var va;
function Fo() {
  if (va)
    return Ie;
  va = 1;
  var n = $e, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, r = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(s, u, l) {
    var c, g = {}, y = null, S = null;
    l !== void 0 && (y = "" + l), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (S = u.ref);
    for (c in u)
      a.call(u, c) && !i.hasOwnProperty(c) && (g[c] = u[c]);
    if (s && s.defaultProps)
      for (c in u = s.defaultProps, u)
        g[c] === void 0 && (g[c] = u[c]);
    return { $$typeof: e, type: s, key: y, ref: S, props: g, _owner: r.current };
  }
  return Ie.Fragment = t, Ie.jsx = d, Ie.jsxs = d, Ie;
}
var Oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ba;
function Mo() {
  return ba || (ba = 1, process.env.NODE_ENV !== "production" && function() {
    var n = $e, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), R = Symbol.iterator, M = "@@iterator";
    function j(o) {
      if (o === null || typeof o != "object")
        return null;
      var f = R && o[R] || o[M];
      return typeof f == "function" ? f : null;
    }
    var Z = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var f = arguments.length, $ = new Array(f > 1 ? f - 1 : 0), _ = 1; _ < f; _++)
          $[_ - 1] = arguments[_];
        bt("error", o, $);
      }
    }
    function bt(o, f, $) {
      {
        var _ = Z.ReactDebugCurrentFrame, I = _.getStackAddendum();
        I !== "" && (f += "%s", $ = $.concat([I]));
        var O = $.map(function(T) {
          return String(T);
        });
        O.unshift("Warning: " + f), Function.prototype.apply.call(console[o], console, O);
      }
    }
    var _t = !1, ar = !1, rr = !1, ir = !1, dr = !1, en;
    en = Symbol.for("react.module.reference");
    function sr(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === a || o === i || dr || o === r || o === l || o === c || ir || o === S || _t || ar || rr || typeof o == "object" && o !== null && (o.$$typeof === y || o.$$typeof === g || o.$$typeof === d || o.$$typeof === s || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === en || o.getModuleId !== void 0));
    }
    function or(o, f, $) {
      var _ = o.displayName;
      if (_)
        return _;
      var I = f.displayName || f.name || "";
      return I !== "" ? $ + "(" + I + ")" : $;
    }
    function tn(o) {
      return o.displayName || "Context";
    }
    function te(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case a:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case r:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case s:
            var f = o;
            return tn(f) + ".Consumer";
          case d:
            var $ = o;
            return tn($._context) + ".Provider";
          case u:
            return or(o, o.render, "ForwardRef");
          case g:
            var _ = o.displayName || null;
            return _ !== null ? _ : te(o.type) || "Memo";
          case y: {
            var I = o, O = I._payload, T = I._init;
            try {
              return te(T(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var he = Object.assign, Se = 0, nn, an, rn, dn, sn, on, un;
    function ln() {
    }
    ln.__reactDisabledLog = !0;
    function ur() {
      {
        if (Se === 0) {
          nn = console.log, an = console.info, rn = console.warn, dn = console.error, sn = console.group, on = console.groupCollapsed, un = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: ln,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        Se++;
      }
    }
    function lr() {
      {
        if (Se--, Se === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: he({}, o, {
              value: nn
            }),
            info: he({}, o, {
              value: an
            }),
            warn: he({}, o, {
              value: rn
            }),
            error: he({}, o, {
              value: dn
            }),
            group: he({}, o, {
              value: sn
            }),
            groupCollapsed: he({}, o, {
              value: on
            }),
            groupEnd: he({}, o, {
              value: un
            })
          });
        }
        Se < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Nt = Z.ReactCurrentDispatcher, Ct;
    function Ye(o, f, $) {
      {
        if (Ct === void 0)
          try {
            throw Error();
          } catch (I) {
            var _ = I.stack.trim().match(/\n( *(at )?)/);
            Ct = _ && _[1] || "";
          }
        return `
` + Ct + o;
      }
    }
    var Pt = !1, ze;
    {
      var cr = typeof WeakMap == "function" ? WeakMap : Map;
      ze = new cr();
    }
    function cn(o, f) {
      if (!o || Pt)
        return "";
      {
        var $ = ze.get(o);
        if ($ !== void 0)
          return $;
      }
      var _;
      Pt = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = Nt.current, Nt.current = null, ur();
      try {
        if (f) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (ne) {
              _ = ne;
            }
            Reflect.construct(o, [], T);
          } else {
            try {
              T.call();
            } catch (ne) {
              _ = ne;
            }
            o.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            _ = ne;
          }
          o();
        }
      } catch (ne) {
        if (ne && _ && typeof ne.stack == "string") {
          for (var x = ne.stack.split(`
`), B = _.stack.split(`
`), k = x.length - 1, F = B.length - 1; k >= 1 && F >= 0 && x[k] !== B[F]; )
            F--;
          for (; k >= 1 && F >= 0; k--, F--)
            if (x[k] !== B[F]) {
              if (k !== 1 || F !== 1)
                do
                  if (k--, F--, F < 0 || x[k] !== B[F]) {
                    var V = `
` + x[k].replace(" at new ", " at ");
                    return o.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", o.displayName)), typeof o == "function" && ze.set(o, V), V;
                  }
                while (k >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        Pt = !1, Nt.current = O, lr(), Error.prepareStackTrace = I;
      }
      var be = o ? o.displayName || o.name : "", Pn = be ? Ye(be) : "";
      return typeof o == "function" && ze.set(o, Pn), Pn;
    }
    function fr(o, f, $) {
      return cn(o, !1);
    }
    function hr(o) {
      var f = o.prototype;
      return !!(f && f.isReactComponent);
    }
    function Je(o, f, $) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return cn(o, hr(o));
      if (typeof o == "string")
        return Ye(o);
      switch (o) {
        case l:
          return Ye("Suspense");
        case c:
          return Ye("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            return fr(o.render);
          case g:
            return Je(o.type, f, $);
          case y: {
            var _ = o, I = _._payload, O = _._init;
            try {
              return Je(O(I), f, $);
            } catch {
            }
          }
        }
      return "";
    }
    var Xe = Object.prototype.hasOwnProperty, fn = {}, hn = Z.ReactDebugCurrentFrame;
    function qe(o) {
      if (o) {
        var f = o._owner, $ = Je(o.type, o._source, f ? f.type : null);
        hn.setExtraStackFrame($);
      } else
        hn.setExtraStackFrame(null);
    }
    function $r(o, f, $, _, I) {
      {
        var O = Function.call.bind(Xe);
        for (var T in o)
          if (O(o, T)) {
            var x = void 0;
            try {
              if (typeof o[T] != "function") {
                var B = Error((_ || "React class") + ": " + $ + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              x = o[T](f, T, _, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              x = k;
            }
            x && !(x instanceof Error) && (qe(I), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", $, T, typeof x), qe(null)), x instanceof Error && !(x.message in fn) && (fn[x.message] = !0, qe(I), w("Failed %s type: %s", $, x.message), qe(null));
          }
      }
    }
    var mr = Array.isArray;
    function xt(o) {
      return mr(o);
    }
    function pr(o) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, $ = f && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return $;
      }
    }
    function gr(o) {
      try {
        return $n(o), !1;
      } catch {
        return !0;
      }
    }
    function $n(o) {
      return "" + o;
    }
    function mn(o) {
      if (gr(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(o)), $n(o);
    }
    var Ee = Z.ReactCurrentOwner, yr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pn, gn, Tt;
    Tt = {};
    function vr(o) {
      if (Xe.call(o, "ref")) {
        var f = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function br(o) {
      if (Xe.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function _r(o, f) {
      if (typeof o.ref == "string" && Ee.current && f && Ee.current.stateNode !== f) {
        var $ = te(Ee.current.type);
        Tt[$] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(Ee.current.type), o.ref), Tt[$] = !0);
      }
    }
    function Nr(o, f) {
      {
        var $ = function() {
          pn || (pn = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        $.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: $,
          configurable: !0
        });
      }
    }
    function Cr(o, f) {
      {
        var $ = function() {
          gn || (gn = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        $.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: $,
          configurable: !0
        });
      }
    }
    var Pr = function(o, f, $, _, I, O, T) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: o,
        key: f,
        ref: $,
        props: T,
        // Record the component responsible for creating this element.
        _owner: O
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function xr(o, f, $, _, I) {
      {
        var O, T = {}, x = null, B = null;
        $ !== void 0 && (mn($), x = "" + $), br(f) && (mn(f.key), x = "" + f.key), vr(f) && (B = f.ref, _r(f, I));
        for (O in f)
          Xe.call(f, O) && !yr.hasOwnProperty(O) && (T[O] = f[O]);
        if (o && o.defaultProps) {
          var k = o.defaultProps;
          for (O in k)
            T[O] === void 0 && (T[O] = k[O]);
        }
        if (x || B) {
          var F = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          x && Nr(T, F), B && Cr(T, F);
        }
        return Pr(o, x, B, I, _, Ee.current, T);
      }
    }
    var St = Z.ReactCurrentOwner, yn = Z.ReactDebugCurrentFrame;
    function ve(o) {
      if (o) {
        var f = o._owner, $ = Je(o.type, o._source, f ? f.type : null);
        yn.setExtraStackFrame($);
      } else
        yn.setExtraStackFrame(null);
    }
    var Et;
    Et = !1;
    function It(o) {
      return typeof o == "object" && o !== null && o.$$typeof === e;
    }
    function vn() {
      {
        if (St.current) {
          var o = te(St.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Tr(o) {
      {
        if (o !== void 0) {
          var f = o.fileName.replace(/^.*[\\\/]/, ""), $ = o.lineNumber;
          return `

Check your code at ` + f + ":" + $ + ".";
        }
        return "";
      }
    }
    var bn = {};
    function Sr(o) {
      {
        var f = vn();
        if (!f) {
          var $ = typeof o == "string" ? o : o.displayName || o.name;
          $ && (f = `

Check the top-level render call using <` + $ + ">.");
        }
        return f;
      }
    }
    function _n(o, f) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var $ = Sr(f);
        if (bn[$])
          return;
        bn[$] = !0;
        var _ = "";
        o && o._owner && o._owner !== St.current && (_ = " It was passed a child from " + te(o._owner.type) + "."), ve(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, _), ve(null);
      }
    }
    function Nn(o, f) {
      {
        if (typeof o != "object")
          return;
        if (xt(o))
          for (var $ = 0; $ < o.length; $++) {
            var _ = o[$];
            It(_) && _n(_, f);
          }
        else if (It(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var I = j(o);
          if (typeof I == "function" && I !== o.entries)
            for (var O = I.call(o), T; !(T = O.next()).done; )
              It(T.value) && _n(T.value, f);
        }
      }
    }
    function Er(o) {
      {
        var f = o.type;
        if (f == null || typeof f == "string")
          return;
        var $;
        if (typeof f == "function")
          $ = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === g))
          $ = f.propTypes;
        else
          return;
        if ($) {
          var _ = te(f);
          $r($, o.props, "prop", _, o);
        } else if (f.PropTypes !== void 0 && !Et) {
          Et = !0;
          var I = te(f);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ir(o) {
      {
        for (var f = Object.keys(o.props), $ = 0; $ < f.length; $++) {
          var _ = f[$];
          if (_ !== "children" && _ !== "key") {
            ve(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), ve(null);
            break;
          }
        }
        o.ref !== null && (ve(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function Cn(o, f, $, _, I, O) {
      {
        var T = sr(o);
        if (!T) {
          var x = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = Tr(I);
          B ? x += B : x += vn();
          var k;
          o === null ? k = "null" : xt(o) ? k = "array" : o !== void 0 && o.$$typeof === e ? (k = "<" + (te(o.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : k = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, x);
        }
        var F = xr(o, f, $, I, O);
        if (F == null)
          return F;
        if (T) {
          var V = f.children;
          if (V !== void 0)
            if (_)
              if (xt(V)) {
                for (var be = 0; be < V.length; be++)
                  Nn(V[be], o);
                Object.freeze && Object.freeze(V);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nn(V, o);
        }
        return o === a ? Ir(F) : Er(F), F;
      }
    }
    function Or(o, f, $) {
      return Cn(o, f, $, !0);
    }
    function wr(o, f, $) {
      return Cn(o, f, $, !1);
    }
    var Ar = wr, Rr = Or;
    Oe.Fragment = a, Oe.jsx = Ar, Oe.jsxs = Rr;
  }()), Oe;
}
process.env.NODE_ENV === "production" ? Jt.exports = Fo() : Jt.exports = Mo();
var se = Jt.exports;
function su(n) {
  const { country: e, height: t = 40, type: a = "png" } = n;
  return /* @__PURE__ */ se.jsx(
    "img",
    {
      ...n,
      alt: e,
      src: a === "svg" ? `https://flagcdn.com/${e.toLowerCase()}.${a}` : `https://flagcdn.com/h${t}/${e.toLowerCase()}.${a}`
    }
  );
}
function tr(n) {
  var e, t, a = "";
  if (typeof n == "string" || typeof n == "number")
    a += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var r = n.length;
      for (e = 0; e < r; e++)
        n[e] && (t = tr(n[e])) && (a && (a += " "), a += t);
    } else
      for (t in n)
        n[t] && (a && (a += " "), a += t);
  return a;
}
function Ke() {
  for (var n, e, t = 0, a = "", r = arguments.length; t < r; t++)
    (n = arguments[t]) && (e = tr(n)) && (a && (a += " "), a += e);
  return a;
}
const Do = (n, e) => !e.some((t) => {
  var a;
  return (a = t == null ? void 0 : t.current) == null ? void 0 : a.contains(n.target);
});
function Lo(n, e) {
  q(() => {
    const t = (a) => {
      Do(a, n) && e(a);
    };
    return document.addEventListener("mousedown", t), () => {
      document.removeEventListener("mousedown", t);
    };
  }, [n, e]);
}
const jo = "_phoneInputNumberInput_6x9yq_2", Bo = "_phoneInputTrigger_6x9yq_10", Go = "_phoneInputDialog_6x9yq_17", Uo = "_phoneInputDialogOpen_6x9yq_25", Zo = "_phoneInputDialogPortal_6x9yq_28", Vo = "_portal_6x9yq_31", ue = {
  phoneInputNumberInput: jo,
  phoneInputTrigger: Bo,
  phoneInputDialog: Go,
  phoneInputDialogOpen: Uo,
  phoneInputDialogPortal: Zo,
  portal: Vo
}, nr = $e.createContext({});
function Te() {
  const n = $e.useContext(nr);
  if (!n)
    throw new Error(
      "PhoneInput compound components cannot be rendered outside the PhoneInput component"
    );
  return n;
}
function Ho({
  children: n,
  dialog: e,
  props: t,
  state: a
}) {
  const [r, i] = X(null), [d, s] = X(), [u, l] = X(null), { isDialogOpen: c, onOpenChange: g, setIsDialogOpen: y, setOnOpenChange: S } = e, [R, M] = X(!1), j = _a(
    () => ({
      dialogPosition: d,
      isDialogOpen: c,
      isPortal: R,
      onOpenChange: g,
      phoneInputRef: r,
      props: t,
      setDialogPosition: s,
      setIsDialogOpen: y,
      setIsPortal: M,
      setOnOpenChange: S,
      setPhoneInputRef: i,
      setTriggerRef: l,
      state: a,
      triggerRef: u
    }),
    [
      r,
      d,
      t,
      a,
      u,
      c,
      g,
      R
    ]
  );
  return /* @__PURE__ */ se.jsx(nr.Provider, { value: j, children: n });
}
function Wo(n) {
  const { children: e, className: t, onOpenChange: a, open: r, ...i } = n, {
    dialogPosition: d,
    isDialogOpen: s,
    isPortal: u,
    props: { phoneInputDialogProps: l },
    setIsDialogOpen: c,
    triggerRef: g
  } = Te(), y = typeof r == "boolean" ? r : s, S = Ft(null);
  return Lo([S, g], () => {
    y && c(!1);
  }), q(() => {
    a && a(y);
  }, [y]), d ? /* @__PURE__ */ se.jsx(
    "div",
    {
      ...i,
      ...l,
      className: Ke(
        ue.phoneInputDialog,
        t,
        y && ue.phoneInputDialogOpen,
        u && ue.phoneInputDialogPortal
      ),
      ref: S,
      style: { top: d.top },
      children: e
    }
  ) : null;
}
function Ko(n) {
  return {
    phoneInputDialogProps: {
      "aria-hidden": !n.open
    }
  };
}
function Yo(n) {
  const { children: e, className: t, country: a, onClick: r, onKeyDown: i } = n, {
    props: { getListItemProps: d },
    setIsDialogOpen: s,
    state: u
  } = Te(), l = (y) => {
    u.handleCountryChange(a), r == null || r(y), s(!1);
  }, c = (y) => {
    y.key === "Enter" && (u.handleCountryChange(a), i == null || i(y), s(!1));
  }, g = d({
    value: a
  });
  return /* @__PURE__ */ se.jsx(
    "li",
    {
      ...n,
      ...g,
      "aria-controls": a,
      className: Ke(ue.countrySelectItem, t),
      onClick: l,
      onKeyDown: c,
      children: e
    }
  );
}
function zo(n) {
  const { selected: e } = n;
  return {
    getListItemProps: kr(
      (t) => ({
        "aria-controls": t.value,
        "aria-selected": e === t.value,
        role: "option"
      }),
      [e]
    )
  };
}
const Jo = Fr((n, e) => {
  const { props: t, state: a } = Te(), { className: r, ...i } = n, d = Ft(null);
  q(() => {
    e && (typeof e == "function" ? e(d.current) : e.current = d.current);
  }, [e]);
  const s = Ft(!1);
  return q(() => {
    const u = d.current;
    if (!u)
      return;
    const l = new MutationObserver((c) => {
      c.forEach((g) => {
        if (g.type === "attributes" && g.attributeName === "value" && !s.current) {
          const y = a.handlePhoneNumberChange(
            u.value
          );
          u.value = y, s.current = !1;
        }
      });
    });
    return l.observe(u, {
      attributeFilter: ["value"],
      attributes: !0
    }), () => {
      l.disconnect();
    };
  }, [d, n.onChange]), /* @__PURE__ */ se.jsx(
    "input",
    {
      ...i,
      ...t.numberInputProps,
      className: Ke(t.numberInputProps.className, r),
      name: n.name,
      onChange: (u) => {
        var c;
        s.current = !0;
        const l = a.handlePhoneNumberChange(u.target.value);
        u.target.value = l, (c = n.onChange) == null || c.call(n, u), s.current = !1;
      },
      ref: d,
      value: typeof n.value == "string" ? er(n.value) : n.value
    }
  );
});
function Xo() {
  return {
    numberInputProps: {
      className: ue.phoneInputNumberInput,
      type: "tel"
    }
  };
}
function qo() {
  const [n, e] = X({
    height: void 0,
    width: void 0
  });
  return q(() => {
    function t() {
      e({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t);
  }, []), n;
}
function Qo({
  children: n,
  className: e
}) {
  const { phoneInputRef: t, setIsPortal: a } = Te(), [r, i] = X(
    null
  ), d = qo();
  return q(() => {
    a(!0);
    const s = document.createElement("div");
    return s.classList.add(ue.portal), i(s), () => {
      a(!1), r && r.parentNode && r.parentNode.removeChild(r);
    };
  }, []), Na(() => {
    if (r && (t != null && t.current)) {
      const s = t.current, u = t.current.getBoundingClientRect();
      return r.style.position = "absolute", r.style.top = `${u.bottom}px`, r.style.left = `${u.left}px`, r.style.width = `${u.width}px`, e && r.classList.add(e), s.appendChild(r), () => {
        r.parentNode === s && s.removeChild(r);
      };
    }
    return () => {
    };
  }, [r, t, d]), r ? Mr.createPortal(n, r) : null;
}
function eu(n) {
  const { onClick: e } = n, { isDialogOpen: t, setIsDialogOpen: a, setTriggerRef: r, triggerRef: i } = Te(), d = (l) => {
    a(!t), e == null || e(l);
  }, { children: s, className: u } = n;
  return /* @__PURE__ */ se.jsx(
    "button",
    {
      ...n,
      "aria-expanded": t,
      "aria-haspopup": "listbox",
      "aria-label": "Country selector",
      className: Ke(ue.phoneInputTrigger, u),
      "data-open": t,
      onClick: d,
      ref: (l) => {
        l && !(i != null && i.current) && r({
          current: l
        });
      },
      role: "combobox",
      type: "button",
      children: s
    }
  );
}
function tu(n) {
  return {
    triggerProps: {
      "aria-expanded": n.open,
      "aria-haspopup": "listbox",
      "aria-label": "Select country",
      role: "combobox",
      type: "button"
    }
  };
}
function nu(n) {
  const {
    isDialogOpen: e,
    isPortal: t,
    phoneInputRef: a,
    setDialogPosition: r,
    setPhoneInputRef: i
  } = Te(), { className: d } = n;
  return Na(() => {
    if (a != null && a.current) {
      const u = a.current.getBoundingClientRect().height;
      r({ top: u });
    }
  }, [a, e]), /* @__PURE__ */ se.jsx(
    "div",
    {
      ...n,
      className: Ke(ue.phoneInput, d),
      ref: (s) => {
        s && !(a != null && a.current) && i({
          current: s
        });
      },
      style: {
        ...t ? {} : { position: "relative" }
      }
    }
  );
}
function au(n, e) {
  const { numberInputProps: t } = Xo(), { getListItemProps: a } = zo({
    selected: e.country
  }), { triggerProps: r } = tu({
    open: n.isDialogOpen
  }), { phoneInputDialogProps: i } = Ko({
    open: n.isDialogOpen
  });
  return {
    getListItemProps: a,
    numberInputProps: t,
    phoneInputDialogProps: i,
    triggerProps: r
  };
}
function ru(n) {
  const {
    children: e,
    initialCountry: t,
    initialPhoneNumber: a,
    onCountryChange: r,
    onPhoneChange: i,
    onValidationChange: d,
    ...s
  } = n, u = ko({
    initialCountry: t,
    initialPhoneNumber: a
  }), [l, c] = $e.useState(!1), g = au({ isDialogOpen: l }, u), [y, S] = X();
  q(() => {
    r && r(u.country);
  }, [n, u.country]);
  const R = _a(
    () => ({
      isDialogOpen: l,
      onOpenChange: y,
      setIsDialogOpen: c,
      setOnOpenChange: S
    }),
    [l, y]
  );
  q(() => {
    y && S(y);
  }, [y]), q(() => {
    d && d(u.isValid);
  }, [d, u.isValid]), q(() => {
    i && i(u.phoneNumber);
  }, [i, u.phoneNumber]);
  const M = (Z, w) => {
    if (typeof Z == "function") {
      const bt = Z({
        country: u.country,
        countryList: u.countryList,
        key: w,
        onPhoneChange: (_t) => u.handlePhoneNumberChange(_t.target.value),
        open: l,
        phone: u.phoneNumber
      });
      return $e.cloneElement(bt, { key: w });
    }
    return $e.cloneElement(Z, { key: w });
  }, j = Array.isArray(e) ? e.map((Z, w) => M(Z, w)) : M(e);
  return /* @__PURE__ */ se.jsx(
    Ho,
    {
      dialog: R,
      props: g,
      state: u,
      children: /* @__PURE__ */ se.jsx(nu, { ...s, children: j })
    }
  );
}
const ou = {
  Dialog: Wo,
  Item: Yo,
  NumberInput: Jo,
  Portal: Qo,
  Root: ru,
  Trigger: eu
};
export {
  su as CountryFlag,
  ou as PhoneInput,
  ru as PhoneInputRoot,
  er as formatPhoneNumber,
  Ro as getCountryCode,
  Ao as phoneValidationSchema,
  au as usePhone,
  ko as usePhoneState
};
