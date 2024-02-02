(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("._phoneInput_8ujgh_1{position:relative}._phoneInputNumberInput_8ujgh_4{outline:none;border:none}._phoneInputNumberInput_8ujgh_4:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset}._phoneInput_8ujgh_1 ._countrySelectTrigger_8ujgh_11{background:none;border:none}._phoneInput_8ujgh_1 ._countrySelectDialog_8ujgh_15{display:none;position:absolute;top:0;left:0}._phoneInput_8ujgh_1 ._countrySelectDialogOpen_8ujgh_21{display:block}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
import a, { useState as fe, useMemo as Yt, useEffect as w2, useRef as zl } from "react";
const yl = [
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
], z2 = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]], BL: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:1[3-79]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-79])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|8(?:0[89]|92)", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-2]|5[01]|8[0-3]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "1(?:(?:[27]2|44|87|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-69]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[047]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "2[0-24-9]\\d{8}|[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-8]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:5056(?:[0-35-9]\\d|4[468])|7302[01]\\d)\\d{4}|(?:472[24]|505[2-57-9]|983[289])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[0149]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "810", "(?:20|33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|5[0-4]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function Jt(n, e) {
  var t = Array.prototype.slice.call(e);
  return t.push(z2), n.apply(this, t);
}
function Tt(n) {
  "@babel/helpers - typeof";
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Tt(n);
}
function M1(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function xl(n, e, t) {
  return e && M1(n.prototype, e), t && M1(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function Ml(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Fl(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && De(n, e);
}
function Hl(n) {
  var e = x2();
  return function() {
    var r = Pe(n), l;
    if (e) {
      var i = Pe(this).constructor;
      l = Reflect.construct(r, arguments, i);
    } else
      l = r.apply(this, arguments);
    return bl(this, l);
  };
}
function bl(n, e) {
  if (e && (Tt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return y2(n);
}
function y2(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Bt(n) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Bt = function(r) {
    if (r === null || !Cl(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, l);
    }
    function l() {
      return et(r, arguments, Pe(this).constructor);
    }
    return l.prototype = Object.create(r.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), De(l, r);
  }, Bt(n);
}
function et(n, e, t) {
  return x2() ? et = Reflect.construct : et = function(l, i, d) {
    var o = [null];
    o.push.apply(o, i);
    var u = Function.bind.apply(l, o), m = new u();
    return d && De(m, d.prototype), m;
  }, et.apply(null, arguments);
}
function x2() {
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
function Cl(n) {
  return Function.toString.call(n).indexOf("[native code]") !== -1;
}
function De(n, e) {
  return De = Object.setPrototypeOf || function(r, l) {
    return r.__proto__ = l, r;
  }, De(n, e);
}
function Pe(n) {
  return Pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Pe(n);
}
var re = /* @__PURE__ */ function(n) {
  Fl(t, n);
  var e = Hl(t);
  function t(r) {
    var l;
    return Ml(this, t), l = e.call(this, r), Object.setPrototypeOf(y2(l), t.prototype), l.name = l.constructor.name, l;
  }
  return xl(t);
}(/* @__PURE__ */ Bt(Error)), Xt = 2, _l = 17, Nl = 3, V = "0-9０-９٠-٩۰-۹", Al = "-‐-―−ー－", Dl = "／/", Pl = "．.", Sl = "  ­​⁠　", Tl = "()（）［］\\[\\]", Bl = "~⁓∼～", J = "".concat(Al).concat(Dl).concat(Pl).concat(Sl).concat(Tl).concat(Bl), vt = "+＋";
function F1(n, e) {
  n = n.split("-"), e = e.split("-");
  for (var t = n[0].split("."), r = e[0].split("."), l = 0; l < 3; l++) {
    var i = Number(t[l]), d = Number(r[l]);
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
var Ll = {}.constructor;
function Ae(n) {
  return n != null && n.constructor === Ll;
}
function Lt(n) {
  "@babel/helpers - typeof";
  return Lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Lt(n);
}
function pt(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function H1(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function gt(n, e, t) {
  return e && H1(n.prototype, e), t && H1(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var Il = "1.2.0", Ol = "1.7.35", b1 = " ext. ", Rl = /^\d+$/, O = /* @__PURE__ */ function() {
  function n(e) {
    pt(this, n), jl(e), this.metadata = e, M2.call(this, e);
  }
  return gt(n, [{
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
        var r = this.countryCallingCodes()[t];
        if (r && r.length === 1 && r[0] === "001")
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
    value: function(t, r) {
      if (t && Rl.test(t) && (r = t, t = null), t && t !== "001") {
        if (!this.hasCountry(t))
          throw new Error("Unknown country: ".concat(t));
        this.numberingPlan = new C1(this.getCountryMetadata(t), this);
      } else if (r) {
        if (!this.hasCallingCode(r))
          throw new Error("Unknown calling code: ".concat(r));
        this.numberingPlan = new C1(this.getNumberingPlanMetadata(r), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(t) {
      var r = this.countryCallingCodes()[t];
      if (r)
        return r.length === 1 && r[0].length === 3 ? void 0 : r;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(t) {
      var r = this.getCountryCodesForCallingCode(t);
      if (r)
        return r[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(t) {
      var r = this.getCountryCodeForCallingCode(t);
      if (r)
        return this.getCountryMetadata(r);
      if (this.nonGeographic()) {
        var l = this.nonGeographic()[t];
        if (l)
          return l;
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
}(), C1 = /* @__PURE__ */ function() {
  function n(e, t) {
    pt(this, n), this.globalMetadataObject = t, this.metadata = e, M2.call(this, t.metadata);
  }
  return gt(n, [{
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
      var t = this, r = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return r.map(function(l) {
        return new kl(l, t);
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
      if (this.hasTypes() && _1(this.types(), t))
        return new Gl(_1(this.types(), t), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? b1 : this.metadata[13] || b1;
    }
  }]), n;
}(), kl = /* @__PURE__ */ function() {
  function n(e, t) {
    pt(this, n), this._format = e, this.metadata = t;
  }
  return gt(n, [{
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
      !Vl.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]), n;
}(), Vl = /^\(?\$1\)?$/, Gl = /* @__PURE__ */ function() {
  function n(e, t) {
    pt(this, n), this.type = e, this.metadata = t;
  }
  return gt(n, [{
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
function _1(n, e) {
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
function jl(n) {
  if (!n)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!Ae(n) || !Ae(n.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Ae(n) ? "an object of shape: { " + Object.keys(n).join(", ") + " }" : "a " + Ul(n) + ": " + n, "."));
}
var Ul = function(e) {
  return Lt(e);
};
function $t(n, e) {
  if (e = new O(e), e.hasCountry(n))
    return e.country(n).countryCallingCode();
  throw new Error("Unknown country: ".concat(n));
}
function Zl(n, e) {
  return e.countries.hasOwnProperty(n);
}
function M2(n) {
  var e = n.version;
  typeof e == "number" ? (this.v1 = e === 1, this.v2 = e === 2, this.v3 = e === 3, this.v4 = e === 4) : e ? F1(e, Il) === -1 ? this.v2 = !0 : F1(e, Ol) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
var Wl = ";ext=", ze = function(e) {
  return "([".concat(V, "]{1,").concat(e, "})");
};
function F2(n) {
  var e = "20", t = "15", r = "9", l = "6", i = "[  \\t,]*", d = "[:\\.．]?[  \\t,-]*", o = "#?", u = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", m = "(?:[xｘ#＃~～]|int|ｉｎｔ)", p = "[- ]+", y = "[  \\t]*", C = "(?:,{2}|;)", P = Wl + ze(e), L = i + u + d + ze(e) + o, U = i + m + d + ze(r) + o, W = p + ze(l) + "#", ce = y + C + d + ze(t) + o, I = y + "(?:,)+" + d + ze(r) + o;
  return P + "|" + L + "|" + U + "|" + W + "|" + ce + "|" + I;
}
var Kl = "[" + V + "]{" + Xt + "}", Yl = "[" + vt + "]{0,1}(?:[" + J + "]*[" + V + "]){3,}[" + J + V + "]*", Jl = new RegExp("^[" + vt + "]{0,1}(?:[" + J + "]*[" + V + "]){1,2}$", "i"), Xl = Yl + // Phone number extensions
"(?:" + F2() + ")?", Ql = new RegExp(
  // Either a short two-digit-only phone number
  "^" + Kl + "$|^" + Xl + "$",
  "i"
);
function ql(n) {
  return n.length >= Xt && Ql.test(n);
}
function e4(n) {
  return Jl.test(n);
}
var N1 = new RegExp("(?:" + F2() + ")$", "i");
function t4(n) {
  var e = n.search(N1);
  if (e < 0)
    return {};
  for (var t = n.slice(0, e), r = n.match(N1), l = 1; l < r.length; ) {
    if (r[l])
      return {
        number: t,
        ext: r[l]
      };
    l++;
  }
}
function a4(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = n4(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var r = 0;
    return function() {
      return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n4(n, e) {
  if (n) {
    if (typeof n == "string")
      return A1(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return A1(n, e);
  }
}
function A1(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
var r4 = {
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
function H2(n) {
  return r4[n];
}
function nt(n) {
  for (var e = "", t = a4(n.split("")), r; !(r = t()).done; ) {
    var l = r.value, i = H2(l);
    i && (e += i);
  }
  return e;
}
function l4(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = i4(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var r = 0;
    return function() {
      return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i4(n, e) {
  if (n) {
    if (typeof n == "string")
      return D1(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return D1(n, e);
  }
}
function D1(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function P1(n) {
  for (var e = "", t = l4(n.split("")), r; !(r = t()).done; ) {
    var l = r.value;
    e += d4(l, e) || "";
  }
  return e;
}
function d4(n, e, t) {
  if (n === "+") {
    if (e) {
      typeof t == "function" && t("end");
      return;
    }
    return "+";
  }
  return H2(n);
}
function c4(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = s4(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var r = 0;
    return function() {
      return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s4(n, e) {
  if (n) {
    if (typeof n == "string")
      return S1(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return S1(n, e);
  }
}
function S1(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function o4(n, e) {
  for (var t = n.slice(), r = c4(e), l; !(l = r()).done; ) {
    var i = l.value;
    n.indexOf(i) < 0 && t.push(i);
  }
  return t.sort(function(d, o) {
    return d - o;
  });
}
function Et(n, e) {
  return b2(n, void 0, e);
}
function b2(n, e, t) {
  var r = t.type(e), l = r && r.possibleLengths() || t.possibleLengths();
  if (!l)
    return "IS_POSSIBLE";
  if (e === "FIXED_LINE_OR_MOBILE") {
    if (!t.type("FIXED_LINE"))
      return b2(n, "MOBILE", t);
    var i = t.type("MOBILE");
    i && (l = o4(l, i.possibleLengths()));
  } else if (e && !r)
    return "INVALID_LENGTH";
  var d = n.length, o = l[0];
  return o === d ? "IS_POSSIBLE" : o > d ? "TOO_SHORT" : l[l.length - 1] < d ? "TOO_LONG" : l.indexOf(d, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function h4(n, e, t) {
  if (e === void 0 && (e = {}), t = new O(t), e.v2) {
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
    return C2(n.phone || n.nationalNumber, t);
  if (n.countryCallingCode && t.isNonGeographicCallingCode(n.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function C2(n, e) {
  switch (Et(n, e)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function ie(n, e) {
  return n = n || "", new RegExp("^(?:" + e + ")$").test(n);
}
function u4(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = m4(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var r = 0;
    return function() {
      return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function m4(n, e) {
  if (n) {
    if (typeof n == "string")
      return T1(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return T1(n, e);
  }
}
function T1(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
var f4 = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function Qt(n, e, t) {
  if (e = e || {}, !(!n.country && !n.countryCallingCode)) {
    t = new O(t), t.selectNumberingPlan(n.country, n.countryCallingCode);
    var r = e.v2 ? n.nationalNumber : n.phone;
    if (ie(r, t.nationalNumberPattern())) {
      if (Nt(r, "FIXED_LINE", t))
        return t.type("MOBILE") && t.type("MOBILE").pattern() === "" || !t.type("MOBILE") || Nt(r, "MOBILE", t) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var l = u4(f4), i; !(i = l()).done; ) {
        var d = i.value;
        if (Nt(r, d, t))
          return d;
      }
    }
  }
}
function Nt(n, e, t) {
  return e = t.type(e), !e || !e.pattern() || e.possibleLengths() && e.possibleLengths().indexOf(n.length) < 0 ? !1 : ie(n, e.pattern());
}
function v4(n, e, t) {
  if (e = e || {}, t = new O(t), t.selectNumberingPlan(n.country, n.countryCallingCode), t.hasTypes())
    return Qt(n, e, t.metadata) !== void 0;
  var r = e.v2 ? n.nationalNumber : n.phone;
  return ie(r, t.nationalNumberPattern());
}
function p4(n, e, t) {
  var r = new O(t), l = r.getCountryCodesForCallingCode(n);
  return l ? l.filter(function(i) {
    return g4(e, i, t);
  }) : [];
}
function g4(n, e, t) {
  var r = new O(t);
  return r.selectNumberingPlan(e), r.numberingPlan.possibleLengths().indexOf(n.length) >= 0;
}
function _2(n) {
  return n.replace(new RegExp("[".concat(J, "]+"), "g"), " ").trim();
}
var N2 = /(\$\d)/;
function A2(n, e, t) {
  var r = t.useInternationalFormat, l = t.withNationalPrefix;
  t.carrierCode, t.metadata;
  var i = n.replace(new RegExp(e.pattern()), r ? e.internationalFormat() : (
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
    l && e.nationalPrefixFormattingRule() ? e.format().replace(N2, e.nationalPrefixFormattingRule()) : e.format()
  ));
  return r ? _2(i) : i;
}
var $4 = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function E4(n, e, t) {
  var r = new O(t);
  if (r.selectNumberingPlan(n, e), r.defaultIDDPrefix())
    return r.defaultIDDPrefix();
  if ($4.test(r.IDDPrefix()))
    return r.IDDPrefix();
}
function w4(n) {
  var e = n.number, t = n.ext;
  if (!e)
    return "";
  if (e[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(e).concat(t ? ";ext=" + t : "");
}
function z4(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = y4(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var r = 0;
    return function() {
      return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function y4(n, e) {
  if (n) {
    if (typeof n == "string")
      return B1(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return B1(n, e);
  }
}
function B1(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function L1(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function I1(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? L1(Object(t), !0).forEach(function(r) {
      x4(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : L1(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function x4(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
var O1 = {
  formatExtension: function(e, t, r) {
    return "".concat(e).concat(r.ext()).concat(t);
  }
};
function M4(n, e, t, r) {
  if (t ? t = I1(I1({}, O1), t) : t = O1, r = new O(r), n.country && n.country !== "001") {
    if (!r.hasCountry(n.country))
      throw new Error("Unknown country: ".concat(n.country));
    r.country(n.country);
  } else if (n.countryCallingCode)
    r.selectNumberingPlan(n.countryCallingCode);
  else
    return n.phone || "";
  var l = r.countryCallingCode(), i = t.v2 ? n.nationalNumber : n.phone, d;
  switch (e) {
    case "NATIONAL":
      return i ? (d = rt(i, n.carrierCode, "NATIONAL", r, t), At(d, n.ext, r, t.formatExtension)) : "";
    case "INTERNATIONAL":
      return i ? (d = rt(i, null, "INTERNATIONAL", r, t), d = "+".concat(l, " ").concat(d), At(d, n.ext, r, t.formatExtension)) : "+".concat(l);
    case "E.164":
      return "+".concat(l).concat(i);
    case "RFC3966":
      return w4({
        number: "+".concat(l).concat(i),
        ext: n.ext
      });
    case "IDD":
      if (!t.fromCountry)
        return;
      var o = H4(i, n.carrierCode, l, t.fromCountry, r);
      return At(o, n.ext, r, t.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(e, '"'));
  }
}
function rt(n, e, t, r, l) {
  var i = F4(r.formats(), n);
  return i ? A2(n, i, {
    useInternationalFormat: t === "INTERNATIONAL",
    withNationalPrefix: !(i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && l && l.nationalPrefix === !1),
    carrierCode: e,
    metadata: r
  }) : n;
}
function F4(n, e) {
  for (var t = z4(n), r; !(r = t()).done; ) {
    var l = r.value;
    if (l.leadingDigitsPatterns().length > 0) {
      var i = l.leadingDigitsPatterns()[l.leadingDigitsPatterns().length - 1];
      if (e.search(i) !== 0)
        continue;
    }
    if (ie(e, l.pattern()))
      return l;
  }
}
function At(n, e, t, r) {
  return e ? r(n, e, t) : n;
}
function H4(n, e, t, r, l) {
  var i = $t(r, l.metadata);
  if (i === t) {
    var d = rt(n, e, "NATIONAL", l);
    return t === "1" ? t + " " + d : d;
  }
  var o = E4(r, void 0, l.metadata);
  if (o)
    return "".concat(o, " ").concat(t, " ").concat(rt(n, null, "INTERNATIONAL", l));
}
function R1(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function k1(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? R1(Object(t), !0).forEach(function(r) {
      b4(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : R1(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function b4(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function C4(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function V1(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function _4(n, e, t) {
  return e && V1(n.prototype, e), t && V1(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var D2 = /* @__PURE__ */ function() {
  function n(e, t, r) {
    if (C4(this, n), !e)
      throw new TypeError("`country` or `countryCallingCode` not passed");
    if (!t)
      throw new TypeError("`nationalNumber` not passed");
    if (!r)
      throw new TypeError("`metadata` not passed");
    var l = A4(e, r), i = l.country, d = l.countryCallingCode;
    this.country = i, this.countryCallingCode = d, this.nationalNumber = t, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return r;
    };
  }
  return _4(n, [{
    key: "setExt",
    value: function(t) {
      this.ext = t;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : p4(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return h4(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return v4(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var t = new O(this.getMetadata());
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
    value: function(t, r) {
      return M4(this, t, r ? k1(k1({}, r), {}, {
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
}(), N4 = function(e) {
  return /^[A-Z]{2}$/.test(e);
};
function A4(n, e) {
  var t, r, l = new O(e);
  return N4(n) ? (t = n, l.selectNumberingPlan(t), r = l.countryCallingCode()) : r = n, {
    country: t,
    countryCallingCode: r
  };
}
var D4 = new RegExp("([" + V + "])");
function P2(n, e, t, r) {
  if (e) {
    var l = new O(r);
    l.selectNumberingPlan(e, t);
    var i = new RegExp(l.IDDPrefix());
    if (n.search(i) === 0) {
      n = n.slice(n.match(i)[0].length);
      var d = n.match(D4);
      if (!(d && d[1] != null && d[1].length > 0 && d[1] === "0"))
        return n;
    }
  }
}
function It(n, e) {
  if (n && e.numberingPlan.nationalPrefixForParsing()) {
    var t = new RegExp("^(?:" + e.numberingPlan.nationalPrefixForParsing() + ")"), r = t.exec(n);
    if (r) {
      var l, i, d = r.length - 1, o = d > 0 && r[d];
      if (e.nationalPrefixTransformRule() && o)
        l = n.replace(t, e.nationalPrefixTransformRule()), d > 1 && (i = r[1]);
      else {
        var u = r[0];
        l = n.slice(u.length), o && (i = r[1]);
      }
      var m;
      if (o) {
        var p = n.indexOf(r[1]), y = n.slice(0, p);
        y === e.numberingPlan.nationalPrefix() && (m = e.numberingPlan.nationalPrefix());
      } else
        m = r[0];
      return {
        nationalNumber: l,
        nationalPrefix: m,
        carrierCode: i
      };
    }
  }
  return {
    nationalNumber: n
  };
}
function Ot(n, e) {
  var t = It(n, e), r = t.carrierCode, l = t.nationalNumber;
  if (l !== n) {
    if (!P4(n, l, e))
      return {
        nationalNumber: n
      };
    if (e.possibleLengths() && !S4(l, e))
      return {
        nationalNumber: n
      };
  }
  return {
    nationalNumber: l,
    carrierCode: r
  };
}
function P4(n, e, t) {
  return !(ie(n, t.nationalNumberPattern()) && !ie(e, t.nationalNumberPattern()));
}
function S4(n, e) {
  switch (Et(n, e)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function S2(n, e, t, r) {
  var l = e ? $t(e, r) : t;
  if (n.indexOf(l) === 0) {
    r = new O(r), r.selectNumberingPlan(e, t);
    var i = n.slice(l.length), d = Ot(i, r), o = d.nationalNumber, u = Ot(n, r), m = u.nationalNumber;
    if (!ie(m, r.nationalNumberPattern()) && ie(o, r.nationalNumberPattern()) || Et(m, r) === "TOO_LONG")
      return {
        countryCallingCode: l,
        number: i
      };
  }
  return {
    number: n
  };
}
function T2(n, e, t, r) {
  if (!n)
    return {};
  var l;
  if (n[0] !== "+") {
    var i = P2(n, e, t, r);
    if (i && i !== n)
      l = !0, n = "+" + i;
    else {
      if (e || t) {
        var d = S2(n, e, t, r), o = d.countryCallingCode, u = d.number;
        if (o)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: o,
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
  r = new O(r);
  for (var m = 2; m - 1 <= Nl && m <= n.length; ) {
    var p = n.slice(1, m);
    if (r.hasCallingCode(p))
      return r.selectNumberingPlan(p), {
        countryCallingCodeSource: l ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: p,
        number: n.slice(m)
      };
    m++;
  }
  return {};
}
function T4(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = B4(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var r = 0;
    return function() {
      return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function B4(n, e) {
  if (n) {
    if (typeof n == "string")
      return G1(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return G1(n, e);
  }
}
function G1(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function B2(n, e) {
  var t = e.countries, r = e.defaultCountry, l = e.metadata;
  l = new O(l);
  for (var i = [], d = T4(t), o; !(o = d()).done; ) {
    var u = o.value;
    if (l.country(u), l.leadingDigits()) {
      if (n && n.search(l.leadingDigits()) === 0)
        return u;
    } else if (Qt({
      phone: n,
      country: u
    }, void 0, l.metadata))
      if (r) {
        if (u === r)
          return u;
        i.push(u);
      } else
        return u;
  }
  if (i.length > 0)
    return i[0];
}
var L4 = !1;
function L2(n, e) {
  var t = e.nationalNumber, r = e.defaultCountry, l = e.metadata;
  if (L4 && l.isNonGeographicCallingCode(n))
    return "001";
  var i = l.getCountryCodesForCallingCode(n);
  if (i)
    return i.length === 1 ? i[0] : B2(t, {
      countries: i,
      defaultCountry: r,
      metadata: l.metadata
    });
}
var I2 = "+", I4 = "[\\-\\.\\(\\)]?", j1 = "([" + V + "]|" + I4 + ")", O4 = "^\\" + I2 + j1 + "*[" + V + "]" + j1 + "*$", R4 = new RegExp(O4, "g"), Rt = V, k4 = "[" + Rt + "]+((\\-)*[" + Rt + "])*", V4 = "a-zA-Z", G4 = "[" + V4 + "]+((\\-)*[" + Rt + "])*", j4 = "^(" + k4 + "\\.)*" + G4 + "\\.?$", U4 = new RegExp(j4, "g"), U1 = "tel:", kt = ";phone-context=", Z4 = ";isub=";
function W4(n) {
  var e = n.indexOf(kt);
  if (e < 0)
    return null;
  var t = e + kt.length;
  if (t >= n.length)
    return "";
  var r = n.indexOf(";", t);
  return r >= 0 ? n.substring(t, r) : n.substring(t);
}
function K4(n) {
  return n === null ? !0 : n.length === 0 ? !1 : R4.test(n) || U4.test(n);
}
function Y4(n, e) {
  var t = e.extractFormattedPhoneNumber, r = W4(n);
  if (!K4(r))
    throw new re("NOT_A_NUMBER");
  var l;
  if (r === null)
    l = t(n) || "";
  else {
    l = "", r.charAt(0) === I2 && (l += r);
    var i = n.indexOf(U1), d;
    i >= 0 ? d = i + U1.length : d = 0;
    var o = n.indexOf(kt);
    l += n.substring(d, o);
  }
  var u = l.indexOf(Z4);
  if (u > 0 && (l = l.substring(0, u)), l !== "")
    return l;
}
var J4 = 250, X4 = new RegExp("[" + vt + V + "]"), Q4 = new RegExp("[^" + V + "#]+$");
function q4(n, e, t) {
  if (e = e || {}, t = new O(t), e.defaultCountry && !t.hasCountry(e.defaultCountry))
    throw e.v2 ? new re("INVALID_COUNTRY") : new Error("Unknown country: ".concat(e.defaultCountry));
  var r = ti(n, e.v2, e.extract), l = r.number, i = r.ext, d = r.error;
  if (!l) {
    if (e.v2)
      throw d === "TOO_SHORT" ? new re("TOO_SHORT") : new re("NOT_A_NUMBER");
    return {};
  }
  var o = ni(l, e.defaultCountry, e.defaultCallingCode, t), u = o.country, m = o.nationalNumber, p = o.countryCallingCode, y = o.countryCallingCodeSource, C = o.carrierCode;
  if (!t.hasSelectedNumberingPlan()) {
    if (e.v2)
      throw new re("INVALID_COUNTRY");
    return {};
  }
  if (!m || m.length < Xt) {
    if (e.v2)
      throw new re("TOO_SHORT");
    return {};
  }
  if (m.length > _l) {
    if (e.v2)
      throw new re("TOO_LONG");
    return {};
  }
  if (e.v2) {
    var P = new D2(p, m, t.metadata);
    return u && (P.country = u), C && (P.carrierCode = C), i && (P.ext = i), P.__countryCallingCodeSource = y, P;
  }
  var L = (e.extended ? t.hasSelectedNumberingPlan() : u) ? ie(m, t.nationalNumberPattern()) : !1;
  return e.extended ? {
    country: u,
    countryCallingCode: p,
    carrierCode: C,
    valid: L,
    possible: L ? !0 : !!(e.extended === !0 && t.possibleLengths() && C2(m, t)),
    phone: m,
    ext: i
  } : L ? ai(u, m, i) : {};
}
function ei(n, e, t) {
  if (n) {
    if (n.length > J4) {
      if (t)
        throw new re("TOO_LONG");
      return;
    }
    if (e === !1)
      return n;
    var r = n.search(X4);
    if (!(r < 0))
      return n.slice(r).replace(Q4, "");
  }
}
function ti(n, e, t) {
  var r = Y4(n, {
    extractFormattedPhoneNumber: function(d) {
      return ei(d, t, e);
    }
  });
  if (!r)
    return {};
  if (!ql(r))
    return e4(r) ? {
      error: "TOO_SHORT"
    } : {};
  var l = t4(r);
  return l.ext ? l : {
    number: r
  };
}
function ai(n, e, t) {
  var r = {
    country: n,
    phone: e
  };
  return t && (r.ext = t), r;
}
function ni(n, e, t, r) {
  var l = T2(P1(n), e, t, r.metadata), i = l.countryCallingCodeSource, d = l.countryCallingCode, o = l.number, u;
  if (d)
    r.selectNumberingPlan(d);
  else if (o && (e || t))
    r.selectNumberingPlan(e, t), e && (u = e), d = t || $t(e, r.metadata);
  else
    return {};
  if (!o)
    return {
      countryCallingCodeSource: i,
      countryCallingCode: d
    };
  var m = Ot(P1(o), r), p = m.nationalNumber, y = m.carrierCode, C = L2(d, {
    nationalNumber: p,
    defaultCountry: e,
    metadata: r
  });
  return C && (u = C, C === "001" || r.country(u)), {
    country: u,
    countryCallingCode: d,
    countryCallingCodeSource: i,
    nationalNumber: p,
    carrierCode: y
  };
}
function Z1(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function W1(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Z1(Object(t), !0).forEach(function(r) {
      ri(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Z1(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function ri(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function li(n, e, t) {
  return q4(n, W1(W1({}, e), {}, {
    v2: !0
  }), t);
}
function K1(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ii(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? K1(Object(t), !0).forEach(function(r) {
      di(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : K1(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function di(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function ci(n, e) {
  return ui(n) || hi(n, e) || oi(n, e) || si();
}
function si() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oi(n, e) {
  if (n) {
    if (typeof n == "string")
      return Y1(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Y1(n, e);
  }
}
function Y1(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function hi(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r = [], l = !0, i = !1, d, o;
    try {
      for (t = t.call(n); !(l = (d = t.next()).done) && (r.push(d.value), !(e && r.length === e)); l = !0)
        ;
    } catch (u) {
      i = !0, o = u;
    } finally {
      try {
        !l && t.return != null && t.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return r;
  }
}
function ui(n) {
  if (Array.isArray(n))
    return n;
}
function O2(n) {
  var e = Array.prototype.slice.call(n), t = ci(e, 4), r = t[0], l = t[1], i = t[2], d = t[3], o, u, m;
  if (typeof r == "string")
    o = r;
  else
    throw new TypeError("A text for parsing must be a string.");
  if (!l || typeof l == "string")
    d ? (u = i, m = d) : (u = void 0, m = i), l && (u = ii({
      defaultCountry: l
    }, u));
  else if (Ae(l))
    i ? (u = l, m = i) : m = l;
  else
    throw new Error("Invalid second argument: ".concat(l));
  return {
    text: o,
    options: u,
    metadata: m
  };
}
function J1(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function X1(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? J1(Object(t), !0).forEach(function(r) {
      mi(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : J1(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function mi(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function R2(n, e, t) {
  e && e.defaultCountry && !Zl(e.defaultCountry, t) && (e = X1(X1({}, e), {}, {
    defaultCountry: void 0
  }));
  try {
    return li(n, e, t);
  } catch (r) {
    if (!(r instanceof re))
      throw r;
  }
}
function fi() {
  var n = O2(arguments), e = n.text, t = n.options, r = n.metadata;
  return R2(e, t, r);
}
function Q1(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function q1(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Q1(Object(t), !0).forEach(function(r) {
      vi(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Q1(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function vi(n, e, t) {
  return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function pi() {
  var n = O2(arguments), e = n.text, t = n.options, r = n.metadata;
  t = q1(q1({}, t), {}, {
    extract: !1
  });
  var l = R2(e, t, r);
  return l && l.isValid() || !1;
}
function gi(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function e2(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function $i(n, e, t) {
  return e && e2(n.prototype, e), t && e2(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var Ei = /* @__PURE__ */ function() {
  function n(e) {
    var t = e.onCountryChange, r = e.onCallingCodeChange;
    gi(this, n), this.onCountryChange = t, this.onCallingCodeChange = r;
  }
  return $i(n, [{
    key: "reset",
    value: function(t) {
      var r = t.country, l = t.callingCode;
      this.international = !1, this.missingPlus = !1, this.IDDPrefix = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(r, l);
    }
  }, {
    key: "resetNationalSignificantNumber",
    value: function() {
      this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberMatchesInput = !0, this.nationalPrefix = void 0, this.carrierCode = void 0, this.complexPrefixBeforeNationalSignificantNumber = void 0;
    }
  }, {
    key: "update",
    value: function(t) {
      for (var r = 0, l = Object.keys(t); r < l.length; r++) {
        var i = l[r];
        this[i] = t[i];
      }
    }
  }, {
    key: "initCountryAndCallingCode",
    value: function(t, r) {
      this.setCountry(t), this.setCallingCode(r);
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
    value: function(t, r) {
      this.international = !0, this.initCountryAndCallingCode(t, r);
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
function wi(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = zi(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var r = 0;
    return function() {
      return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zi(n, e) {
  if (n) {
    if (typeof n == "string")
      return t2(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return t2(n, e);
  }
}
function t2(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
var K = "x", Dt = new RegExp(K);
function tt(n, e) {
  if (e < 1)
    return "";
  for (var t = ""; e > 1; )
    e & 1 && (t += n), e >>= 1, n += n;
  return t + n;
}
function a2(n, e) {
  return n[e] === ")" && e++, yi(n.slice(0, e));
}
function yi(n) {
  for (var e = [], t = 0; t < n.length; )
    n[t] === "(" ? e.push(t) : n[t] === ")" && e.pop(), t++;
  var r = 0, l = "";
  e.push(n.length);
  for (var i = 0, d = e; i < d.length; i++) {
    var o = d[i];
    l += n.slice(r, o), r = o + 1;
  }
  return l;
}
function xi(n, e, t) {
  for (var r = wi(t.split("")), l; !(l = r()).done; ) {
    var i = l.value;
    if (n.slice(e + 1).search(Dt) < 0)
      return;
    e = n.search(Dt), n = n.replace(Dt, i);
  }
  return [n, e];
}
function Mi(n, e, t) {
  var r = t.metadata, l = t.shouldTryNationalPrefixFormattingRule, i = t.getSeparatorAfterNationalPrefix, d = new RegExp("^(?:".concat(e.pattern(), ")$"));
  if (d.test(n.nationalSignificantNumber))
    return Hi(n, e, {
      metadata: r,
      shouldTryNationalPrefixFormattingRule: l,
      getSeparatorAfterNationalPrefix: i
    });
}
function Fi(n, e) {
  return Et(n, e) === "IS_POSSIBLE";
}
function Hi(n, e, t) {
  var r = t.metadata, l = t.shouldTryNationalPrefixFormattingRule, i = t.getSeparatorAfterNationalPrefix;
  if (n.nationalSignificantNumber, n.international, n.nationalPrefix, n.carrierCode, l(e)) {
    var d = n2(n, e, {
      useNationalPrefixFormattingRule: !0,
      getSeparatorAfterNationalPrefix: i,
      metadata: r
    });
    if (d)
      return d;
  }
  return n2(n, e, {
    useNationalPrefixFormattingRule: !1,
    getSeparatorAfterNationalPrefix: i,
    metadata: r
  });
}
function n2(n, e, t) {
  var r = t.metadata, l = t.useNationalPrefixFormattingRule, i = t.getSeparatorAfterNationalPrefix, d = A2(n.nationalSignificantNumber, e, {
    carrierCode: n.carrierCode,
    useInternationalFormat: n.international,
    withNationalPrefix: l,
    metadata: r
  });
  if (l || (n.nationalPrefix ? d = n.nationalPrefix + i(e) + d : n.complexPrefixBeforeNationalSignificantNumber && (d = n.complexPrefixBeforeNationalSignificantNumber + " " + d)), bi(d, n))
    return d;
}
function bi(n, e) {
  return nt(n) === e.getNationalDigits();
}
function Ci(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function r2(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function _i(n, e, t) {
  return e && r2(n.prototype, e), t && r2(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var Ni = /* @__PURE__ */ function() {
  function n() {
    Ci(this, n);
  }
  return _i(n, [{
    key: "parse",
    value: function(t) {
      if (this.context = [{
        or: !0,
        instructions: []
      }], this.parsePattern(t), this.context.length !== 1)
        throw new Error("Non-finalized contexts left when pattern parse ended");
      var r = this.context[0], l = r.branches, i = r.instructions;
      if (l)
        return {
          op: "|",
          args: l.concat([Pt(i)])
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
      var r = t.match(Pi);
      if (!r) {
        if (Di.test(t))
          throw new Error("Illegal characters found in a pattern: ".concat(t));
        this.getContext().instructions = this.getContext().instructions.concat(t.split(""));
        return;
      }
      var l = r[1], i = t.slice(0, r.index), d = t.slice(r.index + l.length);
      switch (l) {
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
          var o = this.getContext(), u = o.branches;
          u.push(Pt(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({
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
          this.getContext().branches.push(Pt(this.getContext().instructions)), this.getContext().instructions = [];
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
            args: Ai(i)
          });
          break;
        default:
          throw new Error("Unknown operator: ".concat(l));
      }
      d && this.parsePattern(d);
    }
  }]), n;
}();
function Ai(n) {
  for (var e = [], t = 0; t < n.length; ) {
    if (n[t] === "-") {
      if (t === 0 || t === n.length - 1)
        throw new Error("Couldn't parse a one-of set pattern: ".concat(n));
      for (var r = n[t - 1].charCodeAt(0) + 1, l = n[t + 1].charCodeAt(0) - 1, i = r; i <= l; )
        e.push(String.fromCharCode(i)), i++;
    } else
      e.push(n[t]);
    t++;
  }
  return e;
}
var Di = /[\(\)\[\]\?\:\|]/, Pi = new RegExp(
  // any of:
  "(\\||\\(\\?\\:|\\)|\\[|\\])"
);
function Pt(n) {
  return n.length === 1 ? n[0] : n;
}
function l2(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = Si(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var r = 0;
    return function() {
      return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Si(n, e) {
  if (n) {
    if (typeof n == "string")
      return i2(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return i2(n, e);
  }
}
function i2(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function Ti(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function d2(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function Bi(n, e, t) {
  return e && d2(n.prototype, e), t && d2(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var Li = /* @__PURE__ */ function() {
  function n(e) {
    Ti(this, n), this.matchTree = new Ni().parse(e);
  }
  return Bi(n, [{
    key: "match",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = r.allowOverflow;
      if (!t)
        throw new Error("String is required");
      var i = Vt(t.split(""), this.matchTree, !0);
      if (i && i.match && delete i.matchedChars, !(i && i.overflow && !l))
        return i;
    }
  }]), n;
}();
function Vt(n, e, t) {
  if (typeof e == "string") {
    var r = n.join("");
    return e.indexOf(r) === 0 ? n.length === e.length ? {
      match: !0,
      matchedChars: n
    } : {
      partialMatch: !0
      // matchedChars: characters
    } : r.indexOf(e) === 0 ? t && n.length > e.length ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: n.slice(0, e.length)
    } : void 0;
  }
  if (Array.isArray(e)) {
    for (var l = n.slice(), i = 0; i < e.length; ) {
      var d = e[i], o = Vt(l, d, t && i === e.length - 1);
      if (o) {
        if (o.overflow)
          return o;
        if (o.match) {
          if (l = l.slice(o.matchedChars.length), l.length === 0)
            return i === e.length - 1 ? {
              match: !0,
              matchedChars: n
            } : {
              partialMatch: !0
              // matchedChars: characters
            };
        } else {
          if (o.partialMatch)
            return {
              partialMatch: !0
              // matchedChars: characters
            };
          throw new Error(`Unsupported match result:
`.concat(JSON.stringify(o, null, 2)));
        }
      } else
        return;
      i++;
    }
    return t ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: n.slice(0, n.length - l.length)
    };
  }
  switch (e.op) {
    case "|":
      for (var u, m = l2(e.args), p; !(p = m()).done; ) {
        var y = p.value, C = Vt(n, y, t);
        if (C) {
          if (C.overflow)
            return C;
          if (C.match)
            return {
              match: !0,
              matchedChars: C.matchedChars
            };
          if (C.partialMatch)
            u = !0;
          else
            throw new Error(`Unsupported match result:
`.concat(JSON.stringify(C, null, 2)));
        }
      }
      return u ? {
        partialMatch: !0
        // matchedChars: ...
      } : void 0;
    case "[]":
      for (var P = l2(e.args), L; !(L = P()).done; ) {
        var U = L.value;
        if (n[0] === U)
          return n.length === 1 ? {
            match: !0,
            matchedChars: n
          } : t ? {
            overflow: !0
          } : {
            match: !0,
            matchedChars: [U]
          };
      }
      return;
    default:
      throw new Error("Unsupported instruction tree: ".concat(e));
  }
}
function c2(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = Ii(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var r = 0;
    return function() {
      return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ii(n, e) {
  if (n) {
    if (typeof n == "string")
      return s2(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return s2(n, e);
  }
}
function s2(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function Oi(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function o2(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function Ri(n, e, t) {
  return e && o2(n.prototype, e), t && o2(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var Gt = "9", ki = 15, Vi = tt(Gt, ki), Gi = /[- ]/, ji = function() {
  return /\[([^\[\]])*\]/g;
}, Ui = function() {
  return /\d(?=[^,}][^,}])/g;
}, Zi = new RegExp("[" + J + "]*\\$1[" + J + "]*(\\$\\d[" + J + "]*)*$"), h2 = 3, Wi = /* @__PURE__ */ function() {
  function n(e) {
    e.state;
    var t = e.metadata;
    Oi(this, n), this.metadata = t, this.resetFormat();
  }
  return Ri(n, [{
    key: "resetFormat",
    value: function() {
      this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1;
    }
  }, {
    key: "reset",
    value: function(t, r) {
      this.resetFormat(), t ? (this.isNANP = t.callingCode() === "1", this.matchingFormats = t.formats(), r.nationalSignificantNumber && this.narrowDownMatchingFormats(r)) : (this.isNANP = void 0, this.matchingFormats = []);
    }
    /**
     * Formats an updated phone number.
     * @param  {string} nextDigits — Additional phone number digits.
     * @param  {object} state — `AsYouType` state.
     * @return {[string]} Returns undefined if the updated phone number can't be formatted using any of the available formats.
     */
  }, {
    key: "format",
    value: function(t, r) {
      var l = this;
      if (Fi(r.nationalSignificantNumber, this.metadata))
        for (var i = c2(this.matchingFormats), d; !(d = i()).done; ) {
          var o = d.value, u = Mi(r, o, {
            metadata: this.metadata,
            shouldTryNationalPrefixFormattingRule: function(p) {
              return l.shouldTryNationalPrefixFormattingRule(p, {
                international: r.international,
                nationalPrefix: r.nationalPrefix
              });
            },
            getSeparatorAfterNationalPrefix: function(p) {
              return l.getSeparatorAfterNationalPrefix(p);
            }
          });
          if (u)
            return this.resetFormat(), this.chosenFormat = o, this.setNationalNumberTemplate(u.replace(/\d/g, K), r), this.populatedNationalNumberTemplate = u, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(K), u;
        }
      return this.formatNationalNumberWithNextDigits(t, r);
    }
    // Formats the next phone number digits.
  }, {
    key: "formatNationalNumberWithNextDigits",
    value: function(t, r) {
      var l = this.chosenFormat, i = this.chooseFormat(r);
      if (i)
        return i === l ? this.formatNextNationalNumberDigits(t) : this.formatNextNationalNumberDigits(r.getNationalDigits());
    }
  }, {
    key: "narrowDownMatchingFormats",
    value: function(t) {
      var r = this, l = t.nationalSignificantNumber, i = t.nationalPrefix, d = t.international, o = l, u = o.length - h2;
      u < 0 && (u = 0), this.matchingFormats = this.matchingFormats.filter(function(m) {
        return r.formatSuits(m, d, i) && r.formatMatches(m, o, u);
      }), this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1 && this.resetFormat();
    }
  }, {
    key: "formatSuits",
    value: function(t, r, l) {
      return !(l && !t.usesNationalPrefix() && // !format.domesticCarrierCodeFormattingRule() &&
      !t.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !r && !l && t.nationalPrefixIsMandatoryWhenFormattingInNationalFormat());
    }
  }, {
    key: "formatMatches",
    value: function(t, r, l) {
      var i = t.leadingDigitsPatterns().length;
      if (i === 0)
        return !0;
      l = Math.min(l, i - 1);
      var d = t.leadingDigitsPatterns()[l];
      if (r.length < h2)
        try {
          return new Li(d).match(r, {
            allowOverflow: !0
          }) !== void 0;
        } catch (o) {
          return console.error(o), !0;
        }
      return new RegExp("^(".concat(d, ")")).test(r);
    }
  }, {
    key: "getFormatFormat",
    value: function(t, r) {
      return r ? t.internationalFormat() : t.format();
    }
  }, {
    key: "chooseFormat",
    value: function(t) {
      for (var r = this, l = function() {
        var m = d.value;
        return r.chosenFormat === m ? "break" : Zi.test(r.getFormatFormat(m, t.international)) ? r.createTemplateForFormat(m, t) ? (r.chosenFormat = m, "break") : (r.matchingFormats = r.matchingFormats.filter(function(p) {
          return p !== m;
        }), "continue") : "continue";
      }, i = c2(this.matchingFormats.slice()), d; !(d = i()).done; ) {
        var o = l();
        if (o === "break")
          break;
      }
      return this.chosenFormat || this.resetFormat(), this.chosenFormat;
    }
  }, {
    key: "createTemplateForFormat",
    value: function(t, r) {
      if (!(t.pattern().indexOf("|") >= 0)) {
        var l = this.getTemplateForFormat(t, r);
        if (l)
          return this.setNationalNumberTemplate(l, r), !0;
      }
    }
  }, {
    key: "getSeparatorAfterNationalPrefix",
    value: function(t) {
      return this.isNANP || t && t.nationalPrefixFormattingRule() && Gi.test(t.nationalPrefixFormattingRule()) ? " " : "";
    }
  }, {
    key: "getInternationalPrefixBeforeCountryCallingCode",
    value: function(t, r) {
      var l = t.IDDPrefix, i = t.missingPlus;
      return l ? r && r.spacing === !1 ? l : l + " " : i ? "" : "+";
    }
  }, {
    key: "getTemplate",
    value: function(t) {
      if (this.template) {
        for (var r = -1, l = 0, i = t.international ? this.getInternationalPrefixBeforeCountryCallingCode(t, {
          spacing: !1
        }) : ""; l < i.length + t.getDigitsWithoutInternationalPrefix().length; )
          r = this.template.indexOf(K, r + 1), l++;
        return a2(this.template, r + 1);
      }
    }
  }, {
    key: "setNationalNumberTemplate",
    value: function(t, r) {
      this.nationalNumberTemplate = t, this.populatedNationalNumberTemplate = t, this.populatedNationalNumberTemplatePosition = -1, r.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(r).replace(/[\d\+]/g, K) + tt(K, r.callingCode.length) + " " + t : this.template = t;
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
    value: function(t, r) {
      var l = r.nationalSignificantNumber, i = r.international, d = r.nationalPrefix, o = r.complexPrefixBeforeNationalSignificantNumber, u = t.pattern();
      u = u.replace(ji(), "\\d").replace(Ui(), "\\d");
      var m = Vi.match(u)[0];
      if (!(l.length > m.length)) {
        var p = new RegExp("^" + u + "$"), y = l.replace(/\d/g, Gt);
        p.test(y) && (m = y);
        var C = this.getFormatFormat(t, i), P;
        if (this.shouldTryNationalPrefixFormattingRule(t, {
          international: i,
          nationalPrefix: d
        })) {
          var L = C.replace(N2, t.nationalPrefixFormattingRule());
          if (nt(t.nationalPrefixFormattingRule()) === (d || "") + nt("$1") && (C = L, P = !0, d))
            for (var U = d.length; U > 0; )
              C = C.replace(/\d/, K), U--;
        }
        var W = m.replace(new RegExp(u), C).replace(new RegExp(Gt, "g"), K);
        return P || (o ? W = tt(K, o.length) + " " + W : d && (W = tt(K, d.length) + this.getSeparatorAfterNationalPrefix(t) + W)), i && (W = _2(W)), W;
      }
    }
  }, {
    key: "formatNextNationalNumberDigits",
    value: function(t) {
      var r = xi(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, t);
      if (!r) {
        this.resetFormat();
        return;
      }
      return this.populatedNationalNumberTemplate = r[0], this.populatedNationalNumberTemplatePosition = r[1], a2(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
    }
  }, {
    key: "shouldTryNationalPrefixFormattingRule",
    value: function(t, r) {
      var l = r.international, i = r.nationalPrefix;
      if (t.nationalPrefixFormattingRule()) {
        var d = t.usesNationalPrefix();
        if (d && i || !d && !l)
          return !0;
      }
    }
  }]), n;
}();
function k2(n, e) {
  return Xi(n) || Ji(n, e) || Yi(n, e) || Ki();
}
function Ki() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yi(n, e) {
  if (n) {
    if (typeof n == "string")
      return u2(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return u2(n, e);
  }
}
function u2(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function Ji(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r = [], l = !0, i = !1, d, o;
    try {
      for (t = t.call(n); !(l = (d = t.next()).done) && (r.push(d.value), !(e && r.length === e)); l = !0)
        ;
    } catch (u) {
      i = !0, o = u;
    } finally {
      try {
        !l && t.return != null && t.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return r;
  }
}
function Xi(n) {
  if (Array.isArray(n))
    return n;
}
function Qi(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function m2(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function qi(n, e, t) {
  return e && m2(n.prototype, e), t && m2(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var e5 = "[" + J + V + "]+", t5 = new RegExp("^" + e5 + "$", "i"), a5 = "(?:[" + vt + "][" + J + V + "]*|[" + J + V + "]+)", n5 = new RegExp("[^" + J + V + "]+.*$"), r5 = /[^\d\[\]]/, l5 = /* @__PURE__ */ function() {
  function n(e) {
    var t = e.defaultCountry, r = e.defaultCallingCode, l = e.metadata, i = e.onNationalSignificantNumberChange;
    Qi(this, n), this.defaultCountry = t, this.defaultCallingCode = r, this.metadata = l, this.onNationalSignificantNumberChange = i;
  }
  return qi(n, [{
    key: "input",
    value: function(t, r) {
      var l = c5(t), i = k2(l, 2), d = i[0], o = i[1], u = nt(d), m;
      return o && (r.digits || (r.startInternationalNumber(), u || (m = !0))), u && this.inputDigits(u, r), {
        digits: u,
        justLeadingPlus: m
      };
    }
    /**
     * Inputs "next" phone number digits.
     * @param  {string} digits
     * @return {string} [formattedNumber] Formatted national phone number (if it can be formatted at this stage). Returning `undefined` means "don't format the national phone number at this stage".
     */
  }, {
    key: "inputDigits",
    value: function(t, r) {
      var l = r.digits, i = l.length < 3 && l.length + t.length >= 3;
      if (r.appendDigits(t), i && this.extractIddPrefix(r), this.isWaitingForCountryCallingCode(r)) {
        if (!this.extractCountryCallingCode(r))
          return;
      } else
        r.appendNationalSignificantNumberDigits(t);
      r.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(r.getNationalDigits(), function(d) {
        return r.update(d);
      });
    }
  }, {
    key: "isWaitingForCountryCallingCode",
    value: function(t) {
      var r = t.international, l = t.callingCode;
      return r && !l;
    }
    // Extracts a country calling code from a number
    // being entered in internatonal format.
  }, {
    key: "extractCountryCallingCode",
    value: function(t) {
      var r = T2("+" + t.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), l = r.countryCallingCode, i = r.number;
      if (l)
        return t.setCallingCode(l), t.update({
          nationalSignificantNumber: i
        }), !0;
    }
  }, {
    key: "reset",
    value: function(t) {
      if (t) {
        this.hasSelectedNumberingPlan = !0;
        var r = t._nationalPrefixForParsing();
        this.couldPossiblyExtractAnotherNationalSignificantNumber = r && r5.test(r);
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
    value: function(t, r) {
      if (this.hasSelectedNumberingPlan) {
        var l = It(t, this.metadata), i = l.nationalPrefix, d = l.nationalNumber, o = l.carrierCode;
        if (d !== t)
          return this.onExtractedNationalNumber(i, o, d, t, r), !0;
      }
    }
    /**
     * In Google's code this function is called "attempt to extract longer NDD".
     * "Some national prefixes are a substring of others", they say.
     * @return {boolean} [result] — Returns `true` if extracting a national prefix produced different results from what they were.
     */
  }, {
    key: "extractAnotherNationalSignificantNumber",
    value: function(t, r, l) {
      if (!this.hasExtractedNationalSignificantNumber)
        return this.extractNationalSignificantNumber(t, l);
      if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
        var i = It(t, this.metadata), d = i.nationalPrefix, o = i.nationalNumber, u = i.carrierCode;
        if (o !== r)
          return this.onExtractedNationalNumber(d, u, o, t, l), !0;
      }
    }
  }, {
    key: "onExtractedNationalNumber",
    value: function(t, r, l, i, d) {
      var o, u, m = i.lastIndexOf(l);
      if (m >= 0 && m === i.length - l.length) {
        u = !0;
        var p = i.slice(0, m);
        p !== t && (o = p);
      }
      d({
        nationalPrefix: t,
        carrierCode: r,
        nationalSignificantNumber: l,
        nationalSignificantNumberMatchesInput: u,
        complexPrefixBeforeNationalSignificantNumber: o
      }), this.hasExtractedNationalSignificantNumber = !0, this.onNationalSignificantNumberChange();
    }
  }, {
    key: "reExtractNationalSignificantNumber",
    value: function(t) {
      if (this.extractAnotherNationalSignificantNumber(t.getNationalDigits(), t.nationalSignificantNumber, function(r) {
        return t.update(r);
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
      var r = t.international, l = t.IDDPrefix, i = t.digits;
      if (t.nationalSignificantNumber, !(r || l)) {
        var d = P2(i, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
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
        var r = S2(t.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), l = r.countryCallingCode;
        if (r.number, l)
          return t.update({
            missingPlus: !0
          }), this.startInternationalNumber(t, {
            country: t.country,
            callingCode: l
          }), !0;
      }
    }
  }, {
    key: "startInternationalNumber",
    value: function(t, r) {
      var l = r.country, i = r.callingCode;
      t.startInternationalNumber(l, i), t.nationalSignificantNumber && (t.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0);
    }
  }, {
    key: "extractCallingCodeAndNationalSignificantNumber",
    value: function(t) {
      this.extractCountryCallingCode(t) && this.extractNationalSignificantNumber(t.getNationalDigits(), function(r) {
        return t.update(r);
      });
    }
  }]), n;
}();
function i5(n) {
  var e = n.search(a5);
  if (!(e < 0)) {
    n = n.slice(e);
    var t;
    return n[0] === "+" && (t = !0, n = n.slice(1)), n = n.replace(n5, ""), t && (n = "+" + n), n;
  }
}
function d5(n) {
  var e = i5(n) || "";
  return e[0] === "+" ? [e.slice(1), !0] : [e];
}
function c5(n) {
  var e = d5(n), t = k2(e, 2), r = t[0], l = t[1];
  return t5.test(r) || (r = ""), [r, l];
}
function s5(n, e) {
  return m5(n) || u5(n, e) || h5(n, e) || o5();
}
function o5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function h5(n, e) {
  if (n) {
    if (typeof n == "string")
      return f2(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return f2(n, e);
  }
}
function f2(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function u5(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r = [], l = !0, i = !1, d, o;
    try {
      for (t = t.call(n); !(l = (d = t.next()).done) && (r.push(d.value), !(e && r.length === e)); l = !0)
        ;
    } catch (u) {
      i = !0, o = u;
    } finally {
      try {
        !l && t.return != null && t.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return r;
  }
}
function m5(n) {
  if (Array.isArray(n))
    return n;
}
function f5(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function v2(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function v5(n, e, t) {
  return e && v2(n.prototype, e), t && v2(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
var V2 = /* @__PURE__ */ function() {
  function n(e, t) {
    f5(this, n), this.metadata = new O(t);
    var r = this.getCountryAndCallingCode(e), l = s5(r, 2), i = l[0], d = l[1];
    this.defaultCountry = i, this.defaultCallingCode = d, this.reset();
  }
  return v5(n, [{
    key: "getCountryAndCallingCode",
    value: function(t) {
      var r, l;
      return t && (Ae(t) ? (r = t.defaultCountry, l = t.defaultCallingCode) : r = t), r && !this.metadata.hasCountry(r) && (r = void 0), [r, l];
    }
    /**
     * Inputs "next" phone number characters.
     * @param  {string} text
     * @return {string} Formatted phone number characters that have been input so far.
     */
  }, {
    key: "input",
    value: function(t) {
      var r = this.parser.input(t, this.state), l = r.digits, i = r.justLeadingPlus;
      if (i)
        this.formattedOutput = "+";
      else if (l) {
        this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state);
        var d;
        if (this.metadata.hasSelectedNumberingPlan() && (d = this.formatter.format(l, this.state)), d === void 0 && this.parser.reExtractNationalSignificantNumber(this.state)) {
          this.determineTheCountryIfNeeded();
          var o = this.state.getNationalDigits();
          o && (d = this.formatter.format(o, this.state));
        }
        this.formattedOutput = d ? this.getFullNumber(d) : this.getNonFormattedNumber();
      }
      return this.formattedOutput;
    }
  }, {
    key: "reset",
    value: function() {
      var t = this;
      return this.state = new Ei({
        onCountryChange: function(l) {
          t.country = l;
        },
        onCallingCodeChange: function(l, i) {
          t.metadata.selectNumberingPlan(i, l), t.formatter.reset(t.metadata.numberingPlan, t.state), t.parser.reset(t.metadata.numberingPlan);
        }
      }), this.formatter = new Wi({
        state: this.state,
        metadata: this.metadata
      }), this.parser = new l5({
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
      var r = this;
      if (this.isInternational()) {
        var l = function(o) {
          return r.formatter.getInternationalPrefixBeforeCountryCallingCode(r.state, {
            spacing: !!o
          }) + o;
        }, i = this.state.callingCode;
        return l(i ? t ? "".concat(i, " ").concat(t) : i : "".concat(this.state.getDigitsWithoutInternationalPrefix()));
      }
      return t;
    }
  }, {
    key: "getNonFormattedNationalNumberWithPrefix",
    value: function() {
      var t = this.state, r = t.nationalSignificantNumber, l = t.complexPrefixBeforeNationalSignificantNumber, i = t.nationalPrefix, d = r, o = l || i;
      return o && (d = o + d), d;
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
        return t.replace(/[\+\d]/g, K);
    }
  }, {
    key: "isCountryCallingCodeAmbiguous",
    value: function() {
      var t = this.state.callingCode, r = this.metadata.getCountryCodesForCallingCode(t);
      return r && r.length > 1;
    }
    // Determines the country of the phone number
    // entered so far based on the country phone code
    // and the national phone number.
  }, {
    key: "determineTheCountry",
    value: function() {
      this.state.setCountry(L2(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, {
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
      var t = this.state, r = t.digits, l = t.callingCode, i = t.country, d = t.nationalSignificantNumber;
      if (r) {
        if (this.isInternational())
          return l ? "+" + l + d : "+" + r;
        if (i || l) {
          var o = i ? this.metadata.countryCallingCode() : l;
          return "+" + o + d;
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
      var t = this.state, r = t.nationalSignificantNumber, l = t.carrierCode, i = t.callingCode, d = this._getCountry();
      if (r && !(!d && !i)) {
        if (d && d === this.defaultCountry) {
          var o = new O(this.metadata.metadata);
          o.selectNumberingPlan(d);
          var u = o.numberingPlan.callingCode(), m = this.metadata.getCountryCodesForCallingCode(u);
          if (m.length > 1) {
            var p = B2(r, {
              countries: m,
              defaultCountry: this.defaultCountry,
              metadata: this.metadata.metadata
            });
            p && (d = p);
          }
        }
        var y = new D2(d || i, r, this.metadata.metadata);
        return l && (y.carrierCode = l), y;
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
function p5() {
  return Jt(fi, arguments);
}
function g5() {
  return Jt(pi, arguments);
}
function lt(n) {
  return V2.call(this, n, z2);
}
lt.prototype = Object.create(V2.prototype, {});
lt.prototype.constructor = lt;
function $5() {
  return Jt($t, arguments);
}
var N;
(function(n) {
  n.assertEqual = (l) => l;
  function e(l) {
  }
  n.assertIs = e;
  function t(l) {
    throw new Error();
  }
  n.assertNever = t, n.arrayToEnum = (l) => {
    const i = {};
    for (const d of l)
      i[d] = d;
    return i;
  }, n.getValidEnumValues = (l) => {
    const i = n.objectKeys(l).filter((o) => typeof l[l[o]] != "number"), d = {};
    for (const o of i)
      d[o] = l[o];
    return n.objectValues(d);
  }, n.objectValues = (l) => n.objectKeys(l).map(function(i) {
    return l[i];
  }), n.objectKeys = typeof Object.keys == "function" ? (l) => Object.keys(l) : (l) => {
    const i = [];
    for (const d in l)
      Object.prototype.hasOwnProperty.call(l, d) && i.push(d);
    return i;
  }, n.find = (l, i) => {
    for (const d of l)
      if (i(d))
        return d;
  }, n.isInteger = typeof Number.isInteger == "function" ? (l) => Number.isInteger(l) : (l) => typeof l == "number" && isFinite(l) && Math.floor(l) === l;
  function r(l, i = " | ") {
    return l.map((d) => typeof d == "string" ? `'${d}'` : d).join(i);
  }
  n.joinValues = r, n.jsonStringifyReplacer = (l, i) => typeof i == "bigint" ? i.toString() : i;
})(N || (N = {}));
var jt;
(function(n) {
  n.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(jt || (jt = {}));
const $ = N.arrayToEnum([
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
]), se = (n) => {
  switch (typeof n) {
    case "undefined":
      return $.undefined;
    case "string":
      return $.string;
    case "number":
      return isNaN(n) ? $.nan : $.number;
    case "boolean":
      return $.boolean;
    case "function":
      return $.function;
    case "bigint":
      return $.bigint;
    case "symbol":
      return $.symbol;
    case "object":
      return Array.isArray(n) ? $.array : n === null ? $.null : n.then && typeof n.then == "function" && n.catch && typeof n.catch == "function" ? $.promise : typeof Map < "u" && n instanceof Map ? $.map : typeof Set < "u" && n instanceof Set ? $.set : typeof Date < "u" && n instanceof Date ? $.date : $.object;
    default:
      return $.unknown;
  }
}, v = N.arrayToEnum([
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
]), E5 = (n) => JSON.stringify(n, null, 2).replace(/"([^"]+)":/g, "$1:");
class X extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
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
    }, r = { _errors: [] }, l = (i) => {
      for (const d of i.issues)
        if (d.code === "invalid_union")
          d.unionErrors.map(l);
        else if (d.code === "invalid_return_type")
          l(d.returnTypeError);
        else if (d.code === "invalid_arguments")
          l(d.argumentsError);
        else if (d.path.length === 0)
          r._errors.push(t(d));
        else {
          let o = r, u = 0;
          for (; u < d.path.length; ) {
            const m = d.path[u];
            u === d.path.length - 1 ? (o[m] = o[m] || { _errors: [] }, o[m]._errors.push(t(d))) : o[m] = o[m] || { _errors: [] }, o = o[m], u++;
          }
        }
    };
    return l(this), r;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, N.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, r = [];
    for (const l of this.issues)
      l.path.length > 0 ? (t[l.path[0]] = t[l.path[0]] || [], t[l.path[0]].push(e(l))) : r.push(e(l));
    return { formErrors: r, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
X.create = (n) => new X(n);
const Se = (n, e) => {
  let t;
  switch (n.code) {
    case v.invalid_type:
      n.received === $.undefined ? t = "Required" : t = `Expected ${n.expected}, received ${n.received}`;
      break;
    case v.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(n.expected, N.jsonStringifyReplacer)}`;
      break;
    case v.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${N.joinValues(n.keys, ", ")}`;
      break;
    case v.invalid_union:
      t = "Invalid input";
      break;
    case v.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${N.joinValues(n.options)}`;
      break;
    case v.invalid_enum_value:
      t = `Invalid enum value. Expected ${N.joinValues(n.options)}, received '${n.received}'`;
      break;
    case v.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case v.invalid_return_type:
      t = "Invalid function return type";
      break;
    case v.invalid_date:
      t = "Invalid date";
      break;
    case v.invalid_string:
      typeof n.validation == "object" ? "includes" in n.validation ? (t = `Invalid input: must include "${n.validation.includes}"`, typeof n.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${n.validation.position}`)) : "startsWith" in n.validation ? t = `Invalid input: must start with "${n.validation.startsWith}"` : "endsWith" in n.validation ? t = `Invalid input: must end with "${n.validation.endsWith}"` : N.assertNever(n.validation) : n.validation !== "regex" ? t = `Invalid ${n.validation}` : t = "Invalid";
      break;
    case v.too_small:
      n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}` : t = "Invalid input";
      break;
    case v.too_big:
      n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "bigint" ? t = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}` : t = "Invalid input";
      break;
    case v.custom:
      t = "Invalid input";
      break;
    case v.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case v.not_multiple_of:
      t = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case v.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, N.assertNever(n);
  }
  return { message: t };
};
let G2 = Se;
function w5(n) {
  G2 = n;
}
function it() {
  return G2;
}
const dt = (n) => {
  const { data: e, path: t, errorMaps: r, issueData: l } = n, i = [...t, ...l.path || []], d = {
    ...l,
    path: i
  };
  let o = "";
  const u = r.filter((m) => !!m).slice().reverse();
  for (const m of u)
    o = m(d, { data: e, defaultError: o }).message;
  return {
    ...l,
    path: i,
    message: l.message || o
  };
}, z5 = [];
function E(n, e) {
  const t = dt({
    issueData: e,
    data: n.data,
    path: n.path,
    errorMaps: [
      n.common.contextualErrorMap,
      n.schemaErrorMap,
      it(),
      Se
      // then global default map
    ].filter((r) => !!r)
  });
  n.common.issues.push(t);
}
class R {
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
    const r = [];
    for (const l of t) {
      if (l.status === "aborted")
        return M;
      l.status === "dirty" && e.dirty(), r.push(l.value);
    }
    return { status: e.value, value: r };
  }
  static async mergeObjectAsync(e, t) {
    const r = [];
    for (const l of t)
      r.push({
        key: await l.key,
        value: await l.value
      });
    return R.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, t) {
    const r = {};
    for (const l of t) {
      const { key: i, value: d } = l;
      if (i.status === "aborted" || d.status === "aborted")
        return M;
      i.status === "dirty" && e.dirty(), d.status === "dirty" && e.dirty(), i.value !== "__proto__" && (typeof d.value < "u" || l.alwaysSet) && (r[i.value] = d.value);
    }
    return { status: e.value, value: r };
  }
}
const M = Object.freeze({
  status: "aborted"
}), j2 = (n) => ({ status: "dirty", value: n }), G = (n) => ({ status: "valid", value: n }), Ut = (n) => n.status === "aborted", Zt = (n) => n.status === "dirty", Te = (n) => n.status === "valid", ct = (n) => typeof Promise < "u" && n instanceof Promise;
var w;
(function(n) {
  n.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, n.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(w || (w = {}));
class ee {
  constructor(e, t, r, l) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = l;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const p2 = (n, e) => {
  if (Te(e))
    return { success: !0, data: e.value };
  if (!n.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new X(n.common.issues);
      return this._error = t, this._error;
    }
  };
};
function F(n) {
  if (!n)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: r, description: l } = n;
  if (e && (t || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: l } : { errorMap: (d, o) => d.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: r ?? o.defaultError } : { message: t ?? o.defaultError }, description: l };
}
class H {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return se(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: se(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new R(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: se(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (ct(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const r = this.safeParse(e, t);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(e, t) {
    var r;
    const l = {
      common: {
        issues: [],
        async: (r = t == null ? void 0 : t.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: t == null ? void 0 : t.errorMap
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: se(e)
    }, i = this._parseSync({ data: e, path: l.path, parent: l });
    return p2(l, i);
  }
  async parseAsync(e, t) {
    const r = await this.safeParseAsync(e, t);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(e, t) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: t == null ? void 0 : t.errorMap,
        async: !0
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: se(e)
    }, l = this._parse({ data: e, path: r.path, parent: r }), i = await (ct(l) ? l : Promise.resolve(l));
    return p2(r, i);
  }
  refine(e, t) {
    const r = (l) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(l) : t;
    return this._refinement((l, i) => {
      const d = e(l), o = () => i.addIssue({
        code: v.custom,
        ...r(l)
      });
      return typeof Promise < "u" && d instanceof Promise ? d.then((u) => u ? !0 : (o(), !1)) : d ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((r, l) => e(r) ? !0 : (l.addIssue(typeof t == "function" ? t(r, l) : t), !1));
  }
  _refinement(e) {
    return new q({
      schema: this,
      typeName: z.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return le.create(this, this._def);
  }
  nullable() {
    return $e.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Q.create(this, this._def);
  }
  promise() {
    return Fe.create(this, this._def);
  }
  or(e) {
    return Oe.create([this, e], this._def);
  }
  and(e) {
    return Re.create(this, e, this._def);
  }
  transform(e) {
    return new q({
      ...F(this._def),
      schema: this,
      typeName: z.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Ue({
      ...F(this._def),
      innerType: this,
      defaultValue: t,
      typeName: z.ZodDefault
    });
  }
  brand() {
    return new Z2({
      typeName: z.ZodBranded,
      type: this,
      ...F(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new ut({
      ...F(this._def),
      innerType: this,
      catchValue: t,
      typeName: z.ZodCatch
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
    return Ze.create(this, e);
  }
  readonly() {
    return ft.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const y5 = /^c[^\s-]{8,}$/i, x5 = /^[a-z][a-z0-9]*$/, M5 = /^[0-9A-HJKMNP-TV-Z]{26}$/, F5 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, H5 = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, b5 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let St;
const C5 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, _5 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, N5 = (n) => n.precision ? n.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}Z$`) : n.precision === 0 ? n.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : n.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function A5(n, e) {
  return !!((e === "v4" || !e) && C5.test(n) || (e === "v6" || !e) && _5.test(n));
}
class Y extends H {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== $.string) {
      const i = this._getOrReturnCtx(e);
      return E(
        i,
        {
          code: v.invalid_type,
          expected: $.string,
          received: i.parsedType
        }
        //
      ), M;
    }
    const r = new R();
    let l;
    for (const i of this._def.checks)
      if (i.kind === "min")
        e.data.length < i.value && (l = this._getOrReturnCtx(e, l), E(l, {
          code: v.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "max")
        e.data.length > i.value && (l = this._getOrReturnCtx(e, l), E(l, {
          code: v.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "length") {
        const d = e.data.length > i.value, o = e.data.length < i.value;
        (d || o) && (l = this._getOrReturnCtx(e, l), d ? E(l, {
          code: v.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : o && E(l, {
          code: v.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), r.dirty());
      } else if (i.kind === "email")
        H5.test(e.data) || (l = this._getOrReturnCtx(e, l), E(l, {
          validation: "email",
          code: v.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "emoji")
        St || (St = new RegExp(b5, "u")), St.test(e.data) || (l = this._getOrReturnCtx(e, l), E(l, {
          validation: "emoji",
          code: v.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "uuid")
        F5.test(e.data) || (l = this._getOrReturnCtx(e, l), E(l, {
          validation: "uuid",
          code: v.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid")
        y5.test(e.data) || (l = this._getOrReturnCtx(e, l), E(l, {
          validation: "cuid",
          code: v.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid2")
        x5.test(e.data) || (l = this._getOrReturnCtx(e, l), E(l, {
          validation: "cuid2",
          code: v.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "ulid")
        M5.test(e.data) || (l = this._getOrReturnCtx(e, l), E(l, {
          validation: "ulid",
          code: v.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          l = this._getOrReturnCtx(e, l), E(l, {
            validation: "url",
            code: v.invalid_string,
            message: i.message
          }), r.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (l = this._getOrReturnCtx(e, l), E(l, {
          validation: "regex",
          code: v.invalid_string,
          message: i.message
        }), r.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (l = this._getOrReturnCtx(e, l), E(l, {
          code: v.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), r.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (l = this._getOrReturnCtx(e, l), E(l, {
          code: v.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), r.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (l = this._getOrReturnCtx(e, l), E(l, {
          code: v.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), r.dirty()) : i.kind === "datetime" ? N5(i).test(e.data) || (l = this._getOrReturnCtx(e, l), E(l, {
          code: v.invalid_string,
          validation: "datetime",
          message: i.message
        }), r.dirty()) : i.kind === "ip" ? A5(e.data, i.version) || (l = this._getOrReturnCtx(e, l), E(l, {
          validation: "ip",
          code: v.invalid_string,
          message: i.message
        }), r.dirty()) : N.assertNever(i);
    return { status: r.value, value: e.data };
  }
  _regex(e, t, r) {
    return this.refinement((l) => e.test(l), {
      validation: t,
      code: v.invalid_string,
      ...w.errToObj(r)
    });
  }
  _addCheck(e) {
    return new Y({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...w.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...w.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...w.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...w.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...w.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...w.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...w.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...w.errToObj(e) });
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
      ...w.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...w.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...w.errToObj(t == null ? void 0 : t.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...w.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...w.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...w.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...w.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...w.errToObj(t)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, w.errToObj(e));
  }
  trim() {
    return new Y({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Y({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Y({
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
Y.create = (n) => {
  var e;
  return new Y({
    checks: [],
    typeName: z.ZodString,
    coerce: (e = n == null ? void 0 : n.coerce) !== null && e !== void 0 ? e : !1,
    ...F(n)
  });
};
function D5(n, e) {
  const t = (n.toString().split(".")[1] || "").length, r = (e.toString().split(".")[1] || "").length, l = t > r ? t : r, i = parseInt(n.toFixed(l).replace(".", "")), d = parseInt(e.toFixed(l).replace(".", ""));
  return i % d / Math.pow(10, l);
}
class oe extends H {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== $.number) {
      const i = this._getOrReturnCtx(e);
      return E(i, {
        code: v.invalid_type,
        expected: $.number,
        received: i.parsedType
      }), M;
    }
    let r;
    const l = new R();
    for (const i of this._def.checks)
      i.kind === "int" ? N.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), E(r, {
        code: v.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), l.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r), E(r, {
        code: v.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), l.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r), E(r, {
        code: v.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), l.dirty()) : i.kind === "multipleOf" ? D5(e.data, i.value) !== 0 && (r = this._getOrReturnCtx(e, r), E(r, {
        code: v.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), l.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), E(r, {
        code: v.not_finite,
        message: i.message
      }), l.dirty()) : N.assertNever(i);
    return { status: l.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, w.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, w.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, w.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, w.toString(t));
  }
  setLimit(e, t, r, l) {
    return new oe({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: r,
          message: w.toString(l)
        }
      ]
    });
  }
  _addCheck(e) {
    return new oe({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: w.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: w.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: w.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: w.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: w.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: w.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: w.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: w.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: w.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && N.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (t === null || r.value > t) && (t = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
oe.create = (n) => new oe({
  checks: [],
  typeName: z.ZodNumber,
  coerce: (n == null ? void 0 : n.coerce) || !1,
  ...F(n)
});
class he extends H {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== $.bigint) {
      const i = this._getOrReturnCtx(e);
      return E(i, {
        code: v.invalid_type,
        expected: $.bigint,
        received: i.parsedType
      }), M;
    }
    let r;
    const l = new R();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r), E(r, {
        code: v.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), l.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r), E(r, {
        code: v.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), l.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), E(r, {
        code: v.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), l.dirty()) : N.assertNever(i);
    return { status: l.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, w.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, w.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, w.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, w.toString(t));
  }
  setLimit(e, t, r, l) {
    return new he({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: r,
          message: w.toString(l)
        }
      ]
    });
  }
  _addCheck(e) {
    return new he({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: w.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: w.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: w.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: w.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: w.toString(t)
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
he.create = (n) => {
  var e;
  return new he({
    checks: [],
    typeName: z.ZodBigInt,
    coerce: (e = n == null ? void 0 : n.coerce) !== null && e !== void 0 ? e : !1,
    ...F(n)
  });
};
class Be extends H {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== $.boolean) {
      const r = this._getOrReturnCtx(e);
      return E(r, {
        code: v.invalid_type,
        expected: $.boolean,
        received: r.parsedType
      }), M;
    }
    return G(e.data);
  }
}
Be.create = (n) => new Be({
  typeName: z.ZodBoolean,
  coerce: (n == null ? void 0 : n.coerce) || !1,
  ...F(n)
});
class pe extends H {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== $.date) {
      const i = this._getOrReturnCtx(e);
      return E(i, {
        code: v.invalid_type,
        expected: $.date,
        received: i.parsedType
      }), M;
    }
    if (isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return E(i, {
        code: v.invalid_date
      }), M;
    }
    const r = new R();
    let l;
    for (const i of this._def.checks)
      i.kind === "min" ? e.data.getTime() < i.value && (l = this._getOrReturnCtx(e, l), E(l, {
        code: v.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), r.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (l = this._getOrReturnCtx(e, l), E(l, {
        code: v.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), r.dirty()) : N.assertNever(i);
    return {
      status: r.value,
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
      message: w.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: w.toString(t)
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
  typeName: z.ZodDate,
  ...F(n)
});
class st extends H {
  _parse(e) {
    if (this._getType(e) !== $.symbol) {
      const r = this._getOrReturnCtx(e);
      return E(r, {
        code: v.invalid_type,
        expected: $.symbol,
        received: r.parsedType
      }), M;
    }
    return G(e.data);
  }
}
st.create = (n) => new st({
  typeName: z.ZodSymbol,
  ...F(n)
});
class Le extends H {
  _parse(e) {
    if (this._getType(e) !== $.undefined) {
      const r = this._getOrReturnCtx(e);
      return E(r, {
        code: v.invalid_type,
        expected: $.undefined,
        received: r.parsedType
      }), M;
    }
    return G(e.data);
  }
}
Le.create = (n) => new Le({
  typeName: z.ZodUndefined,
  ...F(n)
});
class Ie extends H {
  _parse(e) {
    if (this._getType(e) !== $.null) {
      const r = this._getOrReturnCtx(e);
      return E(r, {
        code: v.invalid_type,
        expected: $.null,
        received: r.parsedType
      }), M;
    }
    return G(e.data);
  }
}
Ie.create = (n) => new Ie({
  typeName: z.ZodNull,
  ...F(n)
});
class Me extends H {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return G(e.data);
  }
}
Me.create = (n) => new Me({
  typeName: z.ZodAny,
  ...F(n)
});
class ve extends H {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return G(e.data);
  }
}
ve.create = (n) => new ve({
  typeName: z.ZodUnknown,
  ...F(n)
});
class de extends H {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return E(t, {
      code: v.invalid_type,
      expected: $.never,
      received: t.parsedType
    }), M;
  }
}
de.create = (n) => new de({
  typeName: z.ZodNever,
  ...F(n)
});
class ot extends H {
  _parse(e) {
    if (this._getType(e) !== $.undefined) {
      const r = this._getOrReturnCtx(e);
      return E(r, {
        code: v.invalid_type,
        expected: $.void,
        received: r.parsedType
      }), M;
    }
    return G(e.data);
  }
}
ot.create = (n) => new ot({
  typeName: z.ZodVoid,
  ...F(n)
});
class Q extends H {
  _parse(e) {
    const { ctx: t, status: r } = this._processInputParams(e), l = this._def;
    if (t.parsedType !== $.array)
      return E(t, {
        code: v.invalid_type,
        expected: $.array,
        received: t.parsedType
      }), M;
    if (l.exactLength !== null) {
      const d = t.data.length > l.exactLength.value, o = t.data.length < l.exactLength.value;
      (d || o) && (E(t, {
        code: d ? v.too_big : v.too_small,
        minimum: o ? l.exactLength.value : void 0,
        maximum: d ? l.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: l.exactLength.message
      }), r.dirty());
    }
    if (l.minLength !== null && t.data.length < l.minLength.value && (E(t, {
      code: v.too_small,
      minimum: l.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: l.minLength.message
    }), r.dirty()), l.maxLength !== null && t.data.length > l.maxLength.value && (E(t, {
      code: v.too_big,
      maximum: l.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: l.maxLength.message
    }), r.dirty()), t.common.async)
      return Promise.all([...t.data].map((d, o) => l.type._parseAsync(new ee(t, d, t.path, o)))).then((d) => R.mergeArray(r, d));
    const i = [...t.data].map((d, o) => l.type._parseSync(new ee(t, d, t.path, o)));
    return R.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new Q({
      ...this._def,
      minLength: { value: e, message: w.toString(t) }
    });
  }
  max(e, t) {
    return new Q({
      ...this._def,
      maxLength: { value: e, message: w.toString(t) }
    });
  }
  length(e, t) {
    return new Q({
      ...this._def,
      exactLength: { value: e, message: w.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Q.create = (n, e) => new Q({
  type: n,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: z.ZodArray,
  ...F(e)
});
function ye(n) {
  if (n instanceof S) {
    const e = {};
    for (const t in n.shape) {
      const r = n.shape[t];
      e[t] = le.create(ye(r));
    }
    return new S({
      ...n._def,
      shape: () => e
    });
  } else
    return n instanceof Q ? new Q({
      ...n._def,
      type: ye(n.element)
    }) : n instanceof le ? le.create(ye(n.unwrap())) : n instanceof $e ? $e.create(ye(n.unwrap())) : n instanceof te ? te.create(n.items.map((e) => ye(e))) : n;
}
class S extends H {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = N.objectKeys(e);
    return this._cached = { shape: e, keys: t };
  }
  _parse(e) {
    if (this._getType(e) !== $.object) {
      const m = this._getOrReturnCtx(e);
      return E(m, {
        code: v.invalid_type,
        expected: $.object,
        received: m.parsedType
      }), M;
    }
    const { status: r, ctx: l } = this._processInputParams(e), { shape: i, keys: d } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof de && this._def.unknownKeys === "strip"))
      for (const m in l.data)
        d.includes(m) || o.push(m);
    const u = [];
    for (const m of d) {
      const p = i[m], y = l.data[m];
      u.push({
        key: { status: "valid", value: m },
        value: p._parse(new ee(l, y, l.path, m)),
        alwaysSet: m in l.data
      });
    }
    if (this._def.catchall instanceof de) {
      const m = this._def.unknownKeys;
      if (m === "passthrough")
        for (const p of o)
          u.push({
            key: { status: "valid", value: p },
            value: { status: "valid", value: l.data[p] }
          });
      else if (m === "strict")
        o.length > 0 && (E(l, {
          code: v.unrecognized_keys,
          keys: o
        }), r.dirty());
      else if (m !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const m = this._def.catchall;
      for (const p of o) {
        const y = l.data[p];
        u.push({
          key: { status: "valid", value: p },
          value: m._parse(
            new ee(l, y, l.path, p)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: p in l.data
        });
      }
    }
    return l.common.async ? Promise.resolve().then(async () => {
      const m = [];
      for (const p of u) {
        const y = await p.key;
        m.push({
          key: y,
          value: await p.value,
          alwaysSet: p.alwaysSet
        });
      }
      return m;
    }).then((m) => R.mergeObjectSync(r, m)) : R.mergeObjectSync(r, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return w.errToObj, new S({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, r) => {
          var l, i, d, o;
          const u = (d = (i = (l = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(l, t, r).message) !== null && d !== void 0 ? d : r.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: (o = w.errToObj(e).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new S({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new S({
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
    return new S({
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
    return new S({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: z.ZodObject
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
    return new S({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    return N.objectKeys(e).forEach((r) => {
      e[r] && this.shape[r] && (t[r] = this.shape[r]);
    }), new S({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    return N.objectKeys(this.shape).forEach((r) => {
      e[r] || (t[r] = this.shape[r]);
    }), new S({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return ye(this);
  }
  partial(e) {
    const t = {};
    return N.objectKeys(this.shape).forEach((r) => {
      const l = this.shape[r];
      e && !e[r] ? t[r] = l : t[r] = l.optional();
    }), new S({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    return N.objectKeys(this.shape).forEach((r) => {
      if (e && !e[r])
        t[r] = this.shape[r];
      else {
        let i = this.shape[r];
        for (; i instanceof le; )
          i = i._def.innerType;
        t[r] = i;
      }
    }), new S({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return U2(N.objectKeys(this.shape));
  }
}
S.create = (n, e) => new S({
  shape: () => n,
  unknownKeys: "strip",
  catchall: de.create(),
  typeName: z.ZodObject,
  ...F(e)
});
S.strictCreate = (n, e) => new S({
  shape: () => n,
  unknownKeys: "strict",
  catchall: de.create(),
  typeName: z.ZodObject,
  ...F(e)
});
S.lazycreate = (n, e) => new S({
  shape: n,
  unknownKeys: "strip",
  catchall: de.create(),
  typeName: z.ZodObject,
  ...F(e)
});
class Oe extends H {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = this._def.options;
    function l(i) {
      for (const o of i)
        if (o.result.status === "valid")
          return o.result;
      for (const o of i)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const d = i.map((o) => new X(o.ctx.common.issues));
      return E(t, {
        code: v.invalid_union,
        unionErrors: d
      }), M;
    }
    if (t.common.async)
      return Promise.all(r.map(async (i) => {
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
      })).then(l);
    {
      let i;
      const d = [];
      for (const u of r) {
        const m = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, p = u._parseSync({
          data: t.data,
          path: t.path,
          parent: m
        });
        if (p.status === "valid")
          return p;
        p.status === "dirty" && !i && (i = { result: p, ctx: m }), m.common.issues.length && d.push(m.common.issues);
      }
      if (i)
        return t.common.issues.push(...i.ctx.common.issues), i.result;
      const o = d.map((u) => new X(u));
      return E(t, {
        code: v.invalid_union,
        unionErrors: o
      }), M;
    }
  }
  get options() {
    return this._def.options;
  }
}
Oe.create = (n, e) => new Oe({
  options: n,
  typeName: z.ZodUnion,
  ...F(e)
});
const at = (n) => n instanceof Ve ? at(n.schema) : n instanceof q ? at(n.innerType()) : n instanceof Ge ? [n.value] : n instanceof ue ? n.options : n instanceof je ? Object.keys(n.enum) : n instanceof Ue ? at(n._def.innerType) : n instanceof Le ? [void 0] : n instanceof Ie ? [null] : null;
class wt extends H {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== $.object)
      return E(t, {
        code: v.invalid_type,
        expected: $.object,
        received: t.parsedType
      }), M;
    const r = this.discriminator, l = t.data[r], i = this.optionsMap.get(l);
    return i ? t.common.async ? i._parseAsync({
      data: t.data,
      path: t.path,
      parent: t
    }) : i._parseSync({
      data: t.data,
      path: t.path,
      parent: t
    }) : (E(t, {
      code: v.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), M);
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
  static create(e, t, r) {
    const l = /* @__PURE__ */ new Map();
    for (const i of t) {
      const d = at(i.shape[e]);
      if (!d)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of d) {
        if (l.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        l.set(o, i);
      }
    }
    return new wt({
      typeName: z.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: l,
      ...F(r)
    });
  }
}
function Wt(n, e) {
  const t = se(n), r = se(e);
  if (n === e)
    return { valid: !0, data: n };
  if (t === $.object && r === $.object) {
    const l = N.objectKeys(e), i = N.objectKeys(n).filter((o) => l.indexOf(o) !== -1), d = { ...n, ...e };
    for (const o of i) {
      const u = Wt(n[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      d[o] = u.data;
    }
    return { valid: !0, data: d };
  } else if (t === $.array && r === $.array) {
    if (n.length !== e.length)
      return { valid: !1 };
    const l = [];
    for (let i = 0; i < n.length; i++) {
      const d = n[i], o = e[i], u = Wt(d, o);
      if (!u.valid)
        return { valid: !1 };
      l.push(u.data);
    }
    return { valid: !0, data: l };
  } else
    return t === $.date && r === $.date && +n == +e ? { valid: !0, data: n } : { valid: !1 };
}
class Re extends H {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), l = (i, d) => {
      if (Ut(i) || Ut(d))
        return M;
      const o = Wt(i.value, d.value);
      return o.valid ? ((Zt(i) || Zt(d)) && t.dirty(), { status: t.value, value: o.data }) : (E(r, {
        code: v.invalid_intersection_types
      }), M);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([i, d]) => l(i, d)) : l(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
Re.create = (n, e, t) => new Re({
  left: n,
  right: e,
  typeName: z.ZodIntersection,
  ...F(t)
});
class te extends H {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== $.array)
      return E(r, {
        code: v.invalid_type,
        expected: $.array,
        received: r.parsedType
      }), M;
    if (r.data.length < this._def.items.length)
      return E(r, {
        code: v.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), M;
    !this._def.rest && r.data.length > this._def.items.length && (E(r, {
      code: v.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const i = [...r.data].map((d, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new ee(r, d, r.path, o)) : null;
    }).filter((d) => !!d);
    return r.common.async ? Promise.all(i).then((d) => R.mergeArray(t, d)) : R.mergeArray(t, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new te({
      ...this._def,
      rest: e
    });
  }
}
te.create = (n, e) => {
  if (!Array.isArray(n))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new te({
    items: n,
    typeName: z.ZodTuple,
    rest: null,
    ...F(e)
  });
};
class ke extends H {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== $.object)
      return E(r, {
        code: v.invalid_type,
        expected: $.object,
        received: r.parsedType
      }), M;
    const l = [], i = this._def.keyType, d = this._def.valueType;
    for (const o in r.data)
      l.push({
        key: i._parse(new ee(r, o, r.path, o)),
        value: d._parse(new ee(r, r.data[o], r.path, o))
      });
    return r.common.async ? R.mergeObjectAsync(t, l) : R.mergeObjectSync(t, l);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, r) {
    return t instanceof H ? new ke({
      keyType: e,
      valueType: t,
      typeName: z.ZodRecord,
      ...F(r)
    }) : new ke({
      keyType: Y.create(),
      valueType: e,
      typeName: z.ZodRecord,
      ...F(t)
    });
  }
}
class ht extends H {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== $.map)
      return E(r, {
        code: v.invalid_type,
        expected: $.map,
        received: r.parsedType
      }), M;
    const l = this._def.keyType, i = this._def.valueType, d = [...r.data.entries()].map(([o, u], m) => ({
      key: l._parse(new ee(r, o, r.path, [m, "key"])),
      value: i._parse(new ee(r, u, r.path, [m, "value"]))
    }));
    if (r.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of d) {
          const m = await u.key, p = await u.value;
          if (m.status === "aborted" || p.status === "aborted")
            return M;
          (m.status === "dirty" || p.status === "dirty") && t.dirty(), o.set(m.value, p.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of d) {
        const m = u.key, p = u.value;
        if (m.status === "aborted" || p.status === "aborted")
          return M;
        (m.status === "dirty" || p.status === "dirty") && t.dirty(), o.set(m.value, p.value);
      }
      return { status: t.value, value: o };
    }
  }
}
ht.create = (n, e, t) => new ht({
  valueType: e,
  keyType: n,
  typeName: z.ZodMap,
  ...F(t)
});
class ge extends H {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== $.set)
      return E(r, {
        code: v.invalid_type,
        expected: $.set,
        received: r.parsedType
      }), M;
    const l = this._def;
    l.minSize !== null && r.data.size < l.minSize.value && (E(r, {
      code: v.too_small,
      minimum: l.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: l.minSize.message
    }), t.dirty()), l.maxSize !== null && r.data.size > l.maxSize.value && (E(r, {
      code: v.too_big,
      maximum: l.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: l.maxSize.message
    }), t.dirty());
    const i = this._def.valueType;
    function d(u) {
      const m = /* @__PURE__ */ new Set();
      for (const p of u) {
        if (p.status === "aborted")
          return M;
        p.status === "dirty" && t.dirty(), m.add(p.value);
      }
      return { status: t.value, value: m };
    }
    const o = [...r.data.values()].map((u, m) => i._parse(new ee(r, u, r.path, m)));
    return r.common.async ? Promise.all(o).then((u) => d(u)) : d(o);
  }
  min(e, t) {
    return new ge({
      ...this._def,
      minSize: { value: e, message: w.toString(t) }
    });
  }
  max(e, t) {
    return new ge({
      ...this._def,
      maxSize: { value: e, message: w.toString(t) }
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
  typeName: z.ZodSet,
  ...F(e)
});
class xe extends H {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== $.function)
      return E(t, {
        code: v.invalid_type,
        expected: $.function,
        received: t.parsedType
      }), M;
    function r(o, u) {
      return dt({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          it(),
          Se
        ].filter((m) => !!m),
        issueData: {
          code: v.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function l(o, u) {
      return dt({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          it(),
          Se
        ].filter((m) => !!m),
        issueData: {
          code: v.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const i = { errorMap: t.common.contextualErrorMap }, d = t.data;
    if (this._def.returns instanceof Fe) {
      const o = this;
      return G(async function(...u) {
        const m = new X([]), p = await o._def.args.parseAsync(u, i).catch((P) => {
          throw m.addIssue(r(u, P)), m;
        }), y = await Reflect.apply(d, this, p);
        return await o._def.returns._def.type.parseAsync(y, i).catch((P) => {
          throw m.addIssue(l(y, P)), m;
        });
      });
    } else {
      const o = this;
      return G(function(...u) {
        const m = o._def.args.safeParse(u, i);
        if (!m.success)
          throw new X([r(u, m.error)]);
        const p = Reflect.apply(d, this, m.data), y = o._def.returns.safeParse(p, i);
        if (!y.success)
          throw new X([l(p, y.error)]);
        return y.data;
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
    return new xe({
      ...this._def,
      args: te.create(e).rest(ve.create())
    });
  }
  returns(e) {
    return new xe({
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
  static create(e, t, r) {
    return new xe({
      args: e || te.create([]).rest(ve.create()),
      returns: t || ve.create(),
      typeName: z.ZodFunction,
      ...F(r)
    });
  }
}
class Ve extends H {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Ve.create = (n, e) => new Ve({
  getter: n,
  typeName: z.ZodLazy,
  ...F(e)
});
class Ge extends H {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return E(t, {
        received: t.data,
        code: v.invalid_literal,
        expected: this._def.value
      }), M;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ge.create = (n, e) => new Ge({
  value: n,
  typeName: z.ZodLiteral,
  ...F(e)
});
function U2(n, e) {
  return new ue({
    values: n,
    typeName: z.ZodEnum,
    ...F(e)
  });
}
class ue extends H {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return E(t, {
        expected: N.joinValues(r),
        received: t.parsedType,
        code: v.invalid_type
      }), M;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return E(t, {
        received: t.data,
        code: v.invalid_enum_value,
        options: r
      }), M;
    }
    return G(e.data);
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
    return ue.create(e);
  }
  exclude(e) {
    return ue.create(this.options.filter((t) => !e.includes(t)));
  }
}
ue.create = U2;
class je extends H {
  _parse(e) {
    const t = N.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
    if (r.parsedType !== $.string && r.parsedType !== $.number) {
      const l = N.objectValues(t);
      return E(r, {
        expected: N.joinValues(l),
        received: r.parsedType,
        code: v.invalid_type
      }), M;
    }
    if (t.indexOf(e.data) === -1) {
      const l = N.objectValues(t);
      return E(r, {
        received: r.data,
        code: v.invalid_enum_value,
        options: l
      }), M;
    }
    return G(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
je.create = (n, e) => new je({
  values: n,
  typeName: z.ZodNativeEnum,
  ...F(e)
});
class Fe extends H {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== $.promise && t.common.async === !1)
      return E(t, {
        code: v.invalid_type,
        expected: $.promise,
        received: t.parsedType
      }), M;
    const r = t.parsedType === $.promise ? t.data : Promise.resolve(t.data);
    return G(r.then((l) => this._def.type.parseAsync(l, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
Fe.create = (n, e) => new Fe({
  type: n,
  typeName: z.ZodPromise,
  ...F(e)
});
class q extends H {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === z.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), l = this._def.effect || null, i = {
      addIssue: (d) => {
        E(r, d), d.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), l.type === "preprocess") {
      const d = l.transform(r.data, i);
      return r.common.issues.length ? {
        status: "dirty",
        value: r.data
      } : r.common.async ? Promise.resolve(d).then((o) => this._def.schema._parseAsync({
        data: o,
        path: r.path,
        parent: r
      })) : this._def.schema._parseSync({
        data: d,
        path: r.path,
        parent: r
      });
    }
    if (l.type === "refinement") {
      const d = (o) => {
        const u = l.refinement(o, i);
        if (r.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? M : (o.status === "dirty" && t.dirty(), d(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => o.status === "aborted" ? M : (o.status === "dirty" && t.dirty(), d(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (l.type === "transform")
      if (r.common.async === !1) {
        const d = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Te(d))
          return d;
        const o = l.transform(d.value, i);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((d) => Te(d) ? Promise.resolve(l.transform(d.value, i)).then((o) => ({ status: t.value, value: o })) : d);
    N.assertNever(l);
  }
}
q.create = (n, e, t) => new q({
  schema: n,
  typeName: z.ZodEffects,
  effect: e,
  ...F(t)
});
q.createWithPreprocess = (n, e, t) => new q({
  schema: e,
  effect: { type: "preprocess", transform: n },
  typeName: z.ZodEffects,
  ...F(t)
});
class le extends H {
  _parse(e) {
    return this._getType(e) === $.undefined ? G(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
le.create = (n, e) => new le({
  innerType: n,
  typeName: z.ZodOptional,
  ...F(e)
});
class $e extends H {
  _parse(e) {
    return this._getType(e) === $.null ? G(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
$e.create = (n, e) => new $e({
  innerType: n,
  typeName: z.ZodNullable,
  ...F(e)
});
class Ue extends H {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let r = t.data;
    return t.parsedType === $.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ue.create = (n, e) => new Ue({
  innerType: n,
  typeName: z.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...F(e)
});
class ut extends H {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, l = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return ct(l) ? l.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new X(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: l.status === "valid" ? l.value : this._def.catchValue({
        get error() {
          return new X(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ut.create = (n, e) => new ut({
  innerType: n,
  typeName: z.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...F(e)
});
class mt extends H {
  _parse(e) {
    if (this._getType(e) !== $.nan) {
      const r = this._getOrReturnCtx(e);
      return E(r, {
        code: v.invalid_type,
        expected: $.nan,
        received: r.parsedType
      }), M;
    }
    return { status: "valid", value: e.data };
  }
}
mt.create = (n) => new mt({
  typeName: z.ZodNaN,
  ...F(n)
});
const P5 = Symbol("zod_brand");
class Z2 extends H {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = t.data;
    return this._def.type._parse({
      data: r,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Ze extends H {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? M : i.status === "dirty" ? (t.dirty(), j2(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const l = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return l.status === "aborted" ? M : l.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: l.value
      }) : this._def.out._parseSync({
        data: l.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(e, t) {
    return new Ze({
      in: e,
      out: t,
      typeName: z.ZodPipeline
    });
  }
}
class ft extends H {
  _parse(e) {
    const t = this._def.innerType._parse(e);
    return Te(t) && (t.value = Object.freeze(t.value)), t;
  }
}
ft.create = (n, e) => new ft({
  innerType: n,
  typeName: z.ZodReadonly,
  ...F(e)
});
const W2 = (n, e = {}, t) => n ? Me.create().superRefine((r, l) => {
  var i, d;
  if (!n(r)) {
    const o = typeof e == "function" ? e(r) : typeof e == "string" ? { message: e } : e, u = (d = (i = o.fatal) !== null && i !== void 0 ? i : t) !== null && d !== void 0 ? d : !0, m = typeof o == "string" ? { message: o } : o;
    l.addIssue({ code: "custom", ...m, fatal: u });
  }
}) : Me.create(), S5 = {
  object: S.lazycreate
};
var z;
(function(n) {
  n.ZodString = "ZodString", n.ZodNumber = "ZodNumber", n.ZodNaN = "ZodNaN", n.ZodBigInt = "ZodBigInt", n.ZodBoolean = "ZodBoolean", n.ZodDate = "ZodDate", n.ZodSymbol = "ZodSymbol", n.ZodUndefined = "ZodUndefined", n.ZodNull = "ZodNull", n.ZodAny = "ZodAny", n.ZodUnknown = "ZodUnknown", n.ZodNever = "ZodNever", n.ZodVoid = "ZodVoid", n.ZodArray = "ZodArray", n.ZodObject = "ZodObject", n.ZodUnion = "ZodUnion", n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", n.ZodIntersection = "ZodIntersection", n.ZodTuple = "ZodTuple", n.ZodRecord = "ZodRecord", n.ZodMap = "ZodMap", n.ZodSet = "ZodSet", n.ZodFunction = "ZodFunction", n.ZodLazy = "ZodLazy", n.ZodLiteral = "ZodLiteral", n.ZodEnum = "ZodEnum", n.ZodEffects = "ZodEffects", n.ZodNativeEnum = "ZodNativeEnum", n.ZodOptional = "ZodOptional", n.ZodNullable = "ZodNullable", n.ZodDefault = "ZodDefault", n.ZodCatch = "ZodCatch", n.ZodPromise = "ZodPromise", n.ZodBranded = "ZodBranded", n.ZodPipeline = "ZodPipeline", n.ZodReadonly = "ZodReadonly";
})(z || (z = {}));
const T5 = (n, e = {
  message: `Input not instance of ${n.name}`
}) => W2((t) => t instanceof n, e), K2 = Y.create, Y2 = oe.create, B5 = mt.create, L5 = he.create, J2 = Be.create, I5 = pe.create, O5 = st.create, R5 = Le.create, k5 = Ie.create, V5 = Me.create, G5 = ve.create, j5 = de.create, U5 = ot.create, Z5 = Q.create, W5 = S.create, K5 = S.strictCreate, Y5 = Oe.create, J5 = wt.create, X5 = Re.create, Q5 = te.create, q5 = ke.create, e6 = ht.create, t6 = ge.create, a6 = xe.create, n6 = Ve.create, r6 = Ge.create, l6 = ue.create, i6 = je.create, d6 = Fe.create, g2 = q.create, c6 = le.create, s6 = $e.create, o6 = q.createWithPreprocess, h6 = Ze.create, u6 = () => K2().optional(), m6 = () => Y2().optional(), f6 = () => J2().optional(), v6 = {
  string: (n) => Y.create({ ...n, coerce: !0 }),
  number: (n) => oe.create({ ...n, coerce: !0 }),
  boolean: (n) => Be.create({
    ...n,
    coerce: !0
  }),
  bigint: (n) => he.create({ ...n, coerce: !0 }),
  date: (n) => pe.create({ ...n, coerce: !0 })
}, p6 = M;
var g6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Se,
  setErrorMap: w5,
  getErrorMap: it,
  makeIssue: dt,
  EMPTY_PATH: z5,
  addIssueToContext: E,
  ParseStatus: R,
  INVALID: M,
  DIRTY: j2,
  OK: G,
  isAborted: Ut,
  isDirty: Zt,
  isValid: Te,
  isAsync: ct,
  get util() {
    return N;
  },
  get objectUtil() {
    return jt;
  },
  ZodParsedType: $,
  getParsedType: se,
  ZodType: H,
  ZodString: Y,
  ZodNumber: oe,
  ZodBigInt: he,
  ZodBoolean: Be,
  ZodDate: pe,
  ZodSymbol: st,
  ZodUndefined: Le,
  ZodNull: Ie,
  ZodAny: Me,
  ZodUnknown: ve,
  ZodNever: de,
  ZodVoid: ot,
  ZodArray: Q,
  ZodObject: S,
  ZodUnion: Oe,
  ZodDiscriminatedUnion: wt,
  ZodIntersection: Re,
  ZodTuple: te,
  ZodRecord: ke,
  ZodMap: ht,
  ZodSet: ge,
  ZodFunction: xe,
  ZodLazy: Ve,
  ZodLiteral: Ge,
  ZodEnum: ue,
  ZodNativeEnum: je,
  ZodPromise: Fe,
  ZodEffects: q,
  ZodTransformer: q,
  ZodOptional: le,
  ZodNullable: $e,
  ZodDefault: Ue,
  ZodCatch: ut,
  ZodNaN: mt,
  BRAND: P5,
  ZodBranded: Z2,
  ZodPipeline: Ze,
  ZodReadonly: ft,
  custom: W2,
  Schema: H,
  ZodSchema: H,
  late: S5,
  get ZodFirstPartyTypeKind() {
    return z;
  },
  coerce: v6,
  any: V5,
  array: Z5,
  bigint: L5,
  boolean: J2,
  date: I5,
  discriminatedUnion: J5,
  effect: g2,
  enum: l6,
  function: a6,
  instanceof: T5,
  intersection: X5,
  lazy: n6,
  literal: r6,
  map: e6,
  nan: B5,
  nativeEnum: i6,
  never: j5,
  null: k5,
  nullable: s6,
  number: Y2,
  object: W5,
  oboolean: f6,
  onumber: m6,
  optional: c6,
  ostring: u6,
  pipeline: h6,
  preprocess: o6,
  promise: d6,
  record: q5,
  set: t6,
  strictObject: K5,
  string: K2,
  symbol: O5,
  transformer: g2,
  tuple: Q5,
  undefined: R5,
  union: Y5,
  unknown: G5,
  void: U5,
  NEVER: p6,
  ZodIssueCode: v,
  quotelessJson: E5,
  ZodError: X
});
const $6 = g6.string().refine((n) => {
  try {
    return g5(n);
  } catch {
    return !1;
  }
});
function E6(n) {
  const e = p5(n);
  return e ? e.formatInternational() : n;
}
const Cc = (n = "US", e = "") => {
  const [t, r] = fe(n), [l, i] = fe(
    E6(e)
  ), [d, o] = fe(
    $6.safeParse(e).success
  );
  return {
    country: t,
    countryList: yl,
    handleCountryChange: (p) => {
      r(p);
      try {
        const y = $5(p);
        i(`+${y}`);
      } catch {
        i("");
      }
      o(!1);
    },
    handlePhoneNumberChange: (p) => {
      let y = p;
      if (y.trim() === "") {
        i(""), o(!1);
        return;
      }
      y[0] !== "+" && (y = `+${y}`);
      const C = new lt(t), P = C.input(y);
      i(P);
      const L = C.getNumber();
      if (L) {
        const U = L.country;
        U && U !== t && r(U), o(L.isValid());
      } else
        o(!1);
    },
    isValid: d,
    phoneNumber: l
  };
};
var Kt = { exports: {} }, _e = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $2;
function w6() {
  if ($2)
    return _e;
  $2 = 1;
  var n = a, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(o, u, m) {
    var p, y = {}, C = null, P = null;
    m !== void 0 && (C = "" + m), u.key !== void 0 && (C = "" + u.key), u.ref !== void 0 && (P = u.ref);
    for (p in u)
      r.call(u, p) && !i.hasOwnProperty(p) && (y[p] = u[p]);
    if (o && o.defaultProps)
      for (p in u = o.defaultProps, u)
        y[p] === void 0 && (y[p] = u[p]);
    return { $$typeof: e, type: o, key: C, ref: P, props: y, _owner: l.current };
  }
  return _e.Fragment = t, _e.jsx = d, _e.jsxs = d, _e;
}
var Ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var E2;
function z6() {
  return E2 || (E2 = 1, process.env.NODE_ENV !== "production" && function() {
    var n = a, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), L = Symbol.iterator, U = "@@iterator";
    function W(h) {
      if (h === null || typeof h != "object")
        return null;
      var f = L && h[L] || h[U];
      return typeof f == "function" ? f : null;
    }
    var ce = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(h) {
      {
        for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), x = 1; x < f; x++)
          g[x - 1] = arguments[x];
        Vr("error", h, g);
      }
    }
    function Vr(h, f, g) {
      {
        var x = ce.ReactDebugCurrentFrame, A = x.getStackAddendum();
        A !== "" && (f += "%s", g = g.concat([A]));
        var D = g.map(function(_) {
          return String(_);
        });
        D.unshift("Warning: " + f), Function.prototype.apply.call(console[h], console, D);
      }
    }
    var Gr = !1, jr = !1, Ur = !1, Zr = !1, Wr = !1, e1;
    e1 = Symbol.for("react.module.reference");
    function Kr(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === i || Wr || h === l || h === m || h === p || Zr || h === P || Gr || jr || Ur || typeof h == "object" && h !== null && (h.$$typeof === C || h.$$typeof === y || h.$$typeof === d || h.$$typeof === o || h.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === e1 || h.getModuleId !== void 0));
    }
    function Yr(h, f, g) {
      var x = h.displayName;
      if (x)
        return x;
      var A = f.displayName || f.name || "";
      return A !== "" ? g + "(" + A + ")" : g;
    }
    function t1(h) {
      return h.displayName || "Context";
    }
    function ae(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case l:
          return "StrictMode";
        case m:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case o:
            var f = h;
            return t1(f) + ".Consumer";
          case d:
            var g = h;
            return t1(g._context) + ".Provider";
          case u:
            return Yr(h, h.render, "ForwardRef");
          case y:
            var x = h.displayName || null;
            return x !== null ? x : ae(h.type) || "Memo";
          case C: {
            var A = h, D = A._payload, _ = A._init;
            try {
              return ae(_(D));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var me = Object.assign, be = 0, a1, n1, r1, l1, i1, d1, c1;
    function s1() {
    }
    s1.__reactDisabledLog = !0;
    function Jr() {
      {
        if (be === 0) {
          a1 = console.log, n1 = console.info, r1 = console.warn, l1 = console.error, i1 = console.group, d1 = console.groupCollapsed, c1 = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: s1,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        be++;
      }
    }
    function Xr() {
      {
        if (be--, be === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: me({}, h, {
              value: a1
            }),
            info: me({}, h, {
              value: n1
            }),
            warn: me({}, h, {
              value: r1
            }),
            error: me({}, h, {
              value: l1
            }),
            group: me({}, h, {
              value: i1
            }),
            groupCollapsed: me({}, h, {
              value: d1
            }),
            groupEnd: me({}, h, {
              value: c1
            })
          });
        }
        be < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yt = ce.ReactCurrentDispatcher, xt;
    function Ye(h, f, g) {
      {
        if (xt === void 0)
          try {
            throw Error();
          } catch (A) {
            var x = A.stack.trim().match(/\n( *(at )?)/);
            xt = x && x[1] || "";
          }
        return `
` + xt + h;
      }
    }
    var Mt = !1, Je;
    {
      var Qr = typeof WeakMap == "function" ? WeakMap : Map;
      Je = new Qr();
    }
    function o1(h, f) {
      if (!h || Mt)
        return "";
      {
        var g = Je.get(h);
        if (g !== void 0)
          return g;
      }
      var x;
      Mt = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = yt.current, yt.current = null, Jr();
      try {
        if (f) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (ne) {
              x = ne;
            }
            Reflect.construct(h, [], _);
          } else {
            try {
              _.call();
            } catch (ne) {
              x = ne;
            }
            h.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            x = ne;
          }
          h();
        }
      } catch (ne) {
        if (ne && x && typeof ne.stack == "string") {
          for (var b = ne.stack.split(`
`), k = x.stack.split(`
`), T = b.length - 1, B = k.length - 1; T >= 1 && B >= 0 && b[T] !== k[B]; )
            B--;
          for (; T >= 1 && B >= 0; T--, B--)
            if (b[T] !== k[B]) {
              if (T !== 1 || B !== 1)
                do
                  if (T--, B--, B < 0 || b[T] !== k[B]) {
                    var Z = `
` + b[T].replace(" at new ", " at ");
                    return h.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", h.displayName)), typeof h == "function" && Je.set(h, Z), Z;
                  }
                while (T >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        Mt = !1, yt.current = D, Xr(), Error.prepareStackTrace = A;
      }
      var we = h ? h.displayName || h.name : "", x1 = we ? Ye(we) : "";
      return typeof h == "function" && Je.set(h, x1), x1;
    }
    function qr(h, f, g) {
      return o1(h, !1);
    }
    function el(h) {
      var f = h.prototype;
      return !!(f && f.isReactComponent);
    }
    function Xe(h, f, g) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return o1(h, el(h));
      if (typeof h == "string")
        return Ye(h);
      switch (h) {
        case m:
          return Ye("Suspense");
        case p:
          return Ye("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case u:
            return qr(h.render);
          case y:
            return Xe(h.type, f, g);
          case C: {
            var x = h, A = x._payload, D = x._init;
            try {
              return Xe(D(A), f, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, h1 = {}, u1 = ce.ReactDebugCurrentFrame;
    function qe(h) {
      if (h) {
        var f = h._owner, g = Xe(h.type, h._source, f ? f.type : null);
        u1.setExtraStackFrame(g);
      } else
        u1.setExtraStackFrame(null);
    }
    function tl(h, f, g, x, A) {
      {
        var D = Function.call.bind(Qe);
        for (var _ in h)
          if (D(h, _)) {
            var b = void 0;
            try {
              if (typeof h[_] != "function") {
                var k = Error((x || "React class") + ": " + g + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              b = h[_](f, _, x, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              b = T;
            }
            b && !(b instanceof Error) && (qe(A), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", g, _, typeof b), qe(null)), b instanceof Error && !(b.message in h1) && (h1[b.message] = !0, qe(A), I("Failed %s type: %s", g, b.message), qe(null));
          }
      }
    }
    var al = Array.isArray;
    function Ft(h) {
      return al(h);
    }
    function nl(h) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, g = f && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return g;
      }
    }
    function rl(h) {
      try {
        return m1(h), !1;
      } catch {
        return !0;
      }
    }
    function m1(h) {
      return "" + h;
    }
    function f1(h) {
      if (rl(h))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nl(h)), m1(h);
    }
    var Ce = ce.ReactCurrentOwner, ll = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, v1, p1, Ht;
    Ht = {};
    function il(h) {
      if (Qe.call(h, "ref")) {
        var f = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function dl(h) {
      if (Qe.call(h, "key")) {
        var f = Object.getOwnPropertyDescriptor(h, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function cl(h, f) {
      if (typeof h.ref == "string" && Ce.current && f && Ce.current.stateNode !== f) {
        var g = ae(Ce.current.type);
        Ht[g] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ae(Ce.current.type), h.ref), Ht[g] = !0);
      }
    }
    function sl(h, f) {
      {
        var g = function() {
          v1 || (v1 = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function ol(h, f) {
      {
        var g = function() {
          p1 || (p1 = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var hl = function(h, f, g, x, A, D, _) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: h,
        key: f,
        ref: g,
        props: _,
        // Record the component responsible for creating this element.
        _owner: D
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function ul(h, f, g, x, A) {
      {
        var D, _ = {}, b = null, k = null;
        g !== void 0 && (f1(g), b = "" + g), dl(f) && (f1(f.key), b = "" + f.key), il(f) && (k = f.ref, cl(f, A));
        for (D in f)
          Qe.call(f, D) && !ll.hasOwnProperty(D) && (_[D] = f[D]);
        if (h && h.defaultProps) {
          var T = h.defaultProps;
          for (D in T)
            _[D] === void 0 && (_[D] = T[D]);
        }
        if (b || k) {
          var B = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          b && sl(_, B), k && ol(_, B);
        }
        return hl(h, b, k, A, x, Ce.current, _);
      }
    }
    var bt = ce.ReactCurrentOwner, g1 = ce.ReactDebugCurrentFrame;
    function Ee(h) {
      if (h) {
        var f = h._owner, g = Xe(h.type, h._source, f ? f.type : null);
        g1.setExtraStackFrame(g);
      } else
        g1.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function _t(h) {
      return typeof h == "object" && h !== null && h.$$typeof === e;
    }
    function $1() {
      {
        if (bt.current) {
          var h = ae(bt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function ml(h) {
      {
        if (h !== void 0) {
          var f = h.fileName.replace(/^.*[\\\/]/, ""), g = h.lineNumber;
          return `

Check your code at ` + f + ":" + g + ".";
        }
        return "";
      }
    }
    var E1 = {};
    function fl(h) {
      {
        var f = $1();
        if (!f) {
          var g = typeof h == "string" ? h : h.displayName || h.name;
          g && (f = `

Check the top-level render call using <` + g + ">.");
        }
        return f;
      }
    }
    function w1(h, f) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var g = fl(f);
        if (E1[g])
          return;
        E1[g] = !0;
        var x = "";
        h && h._owner && h._owner !== bt.current && (x = " It was passed a child from " + ae(h._owner.type) + "."), Ee(h), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, x), Ee(null);
      }
    }
    function z1(h, f) {
      {
        if (typeof h != "object")
          return;
        if (Ft(h))
          for (var g = 0; g < h.length; g++) {
            var x = h[g];
            _t(x) && w1(x, f);
          }
        else if (_t(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var A = W(h);
          if (typeof A == "function" && A !== h.entries)
            for (var D = A.call(h), _; !(_ = D.next()).done; )
              _t(_.value) && w1(_.value, f);
        }
      }
    }
    function vl(h) {
      {
        var f = h.type;
        if (f == null || typeof f == "string")
          return;
        var g;
        if (typeof f == "function")
          g = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === y))
          g = f.propTypes;
        else
          return;
        if (g) {
          var x = ae(f);
          tl(g, h.props, "prop", x, h);
        } else if (f.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var A = ae(f);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pl(h) {
      {
        for (var f = Object.keys(h.props), g = 0; g < f.length; g++) {
          var x = f[g];
          if (x !== "children" && x !== "key") {
            Ee(h), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), Ee(null);
            break;
          }
        }
        h.ref !== null && (Ee(h), I("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    function y1(h, f, g, x, A, D) {
      {
        var _ = Kr(h);
        if (!_) {
          var b = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = ml(A);
          k ? b += k : b += $1();
          var T;
          h === null ? T = "null" : Ft(h) ? T = "array" : h !== void 0 && h.$$typeof === e ? (T = "<" + (ae(h.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : T = typeof h, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, b);
        }
        var B = ul(h, f, g, A, D);
        if (B == null)
          return B;
        if (_) {
          var Z = f.children;
          if (Z !== void 0)
            if (x)
              if (Ft(Z)) {
                for (var we = 0; we < Z.length; we++)
                  z1(Z[we], h);
                Object.freeze && Object.freeze(Z);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              z1(Z, h);
        }
        return h === r ? pl(B) : vl(B), B;
      }
    }
    function gl(h, f, g) {
      return y1(h, f, g, !0);
    }
    function $l(h, f, g) {
      return y1(h, f, g, !1);
    }
    var El = $l, wl = gl;
    Ne.Fragment = r, Ne.jsx = El, Ne.jsxs = wl;
  }()), Ne;
}
process.env.NODE_ENV === "production" ? Kt.exports = w6() : Kt.exports = z6();
var j = Kt.exports;
const X2 = a.createContext({});
function Q2() {
  const n = a.useContext(X2);
  if (!n)
    throw new Error(
      "CountryFlag compound components cannot be rendered outside the CountryFlag component"
    );
  return n;
}
function y6({
  children: n,
  country: e
}) {
  const t = Yt(() => ({ country: e }), [e]);
  return /* @__PURE__ */ j.jsx(X2.Provider, { value: t, children: n });
}
function x6(n) {
  const { country: e } = Q2();
  return /* @__PURE__ */ j.jsx(
    "img",
    {
      ...n,
      alt: e,
      src: `https://flagsapi.com/${e}/flat/64.png`
    }
  );
}
var M6 = ["title"], F6 = ["title"], H6 = ["title"], b6 = ["title"], C6 = ["title"], _6 = ["title"], N6 = ["title"], A6 = ["title"], D6 = ["title"], P6 = ["title"], S6 = ["title"], T6 = ["title"], B6 = ["title"], L6 = ["title"], I6 = ["title"], O6 = ["title"], R6 = ["title"], k6 = ["title"], V6 = ["title"], G6 = ["title"], j6 = ["title"], U6 = ["title"], Z6 = ["title"], W6 = ["title"], K6 = ["title"], Y6 = ["title"], J6 = ["title"], X6 = ["title"], Q6 = ["title"], q6 = ["title"], e7 = ["title"], t7 = ["title"], a7 = ["title"], n7 = ["title"], r7 = ["title"], l7 = ["title"], i7 = ["title"], d7 = ["title"], c7 = ["title"], s7 = ["title"], o7 = ["title"], h7 = ["title"], u7 = ["title"], m7 = ["title"], f7 = ["title"], v7 = ["title"], p7 = ["title"], g7 = ["title"], $7 = ["title"], E7 = ["title"], w7 = ["title"], z7 = ["title"], y7 = ["title"], x7 = ["title"], M7 = ["title"], F7 = ["title"], H7 = ["title"], b7 = ["title"], C7 = ["title"], _7 = ["title"], N7 = ["title"], A7 = ["title"], D7 = ["title"], P7 = ["title"], S7 = ["title"], T7 = ["title"], B7 = ["title"], L7 = ["title"], I7 = ["title"], O7 = ["title"], R7 = ["title"], k7 = ["title"], V7 = ["title"], G7 = ["title"], j7 = ["title"], U7 = ["title"], Z7 = ["title"], W7 = ["title"], K7 = ["title"], Y7 = ["title"], J7 = ["title"], X7 = ["title"], Q7 = ["title"], q7 = ["title"], e8 = ["title"], t8 = ["title"], a8 = ["title"], n8 = ["title"], r8 = ["title"], l8 = ["title"], i8 = ["title"], d8 = ["title"], c8 = ["title"], s8 = ["title"], o8 = ["title"], h8 = ["title"], u8 = ["title"], m8 = ["title"], f8 = ["title"], v8 = ["title"], p8 = ["title"], g8 = ["title"], $8 = ["title"], E8 = ["title"], w8 = ["title"], z8 = ["title"], y8 = ["title"], x8 = ["title"], M8 = ["title"], F8 = ["title"], H8 = ["title"], b8 = ["title"], C8 = ["title"], _8 = ["title"], N8 = ["title"], A8 = ["title"], D8 = ["title"], P8 = ["title"], S8 = ["title"], T8 = ["title"], B8 = ["title"], L8 = ["title"], I8 = ["title"], O8 = ["title"], R8 = ["title"], k8 = ["title"], V8 = ["title"], G8 = ["title"], j8 = ["title"], U8 = ["title"], Z8 = ["title"], W8 = ["title"], K8 = ["title"], Y8 = ["title"], J8 = ["title"], X8 = ["title"], Q8 = ["title"], q8 = ["title"], ed = ["title"], td = ["title"], ad = ["title"], nd = ["title"], rd = ["title"], ld = ["title"], id = ["title"], dd = ["title"], cd = ["title"], sd = ["title"], od = ["title"], hd = ["title"], ud = ["title"], md = ["title"], fd = ["title"], vd = ["title"], pd = ["title"], gd = ["title"], $d = ["title"], Ed = ["title"], wd = ["title"], zd = ["title"], yd = ["title"], xd = ["title"], Md = ["title"], Fd = ["title"], Hd = ["title"], bd = ["title"], Cd = ["title"], _d = ["title"], Nd = ["title"], Ad = ["title"], Dd = ["title"], Pd = ["title"], Sd = ["title"], Td = ["title"], Bd = ["title"], Ld = ["title"], Id = ["title"], Od = ["title"], Rd = ["title"], kd = ["title"], Vd = ["title"], Gd = ["title"], jd = ["title"], Ud = ["title"], Zd = ["title"], Wd = ["title"], Kd = ["title"], Yd = ["title"], Jd = ["title"], Xd = ["title"], Qd = ["title"], qd = ["title"], e9 = ["title"], t9 = ["title"], a9 = ["title"], n9 = ["title"], r9 = ["title"], l9 = ["title"], i9 = ["title"], d9 = ["title"], c9 = ["title"], s9 = ["title"], o9 = ["title"], h9 = ["title"], u9 = ["title"], m9 = ["title"], f9 = ["title"], v9 = ["title"], p9 = ["title"], g9 = ["title"], $9 = ["title"], E9 = ["title"], w9 = ["title"], z9 = ["title"], y9 = ["title"], x9 = ["title"], M9 = ["title"], F9 = ["title"], H9 = ["title"], b9 = ["title"], C9 = ["title"], _9 = ["title"], N9 = ["title"], A9 = ["title"], D9 = ["title"], P9 = ["title"], S9 = ["title"], T9 = ["title"], B9 = ["title"], L9 = ["title"], I9 = ["title"], O9 = ["title"], R9 = ["title"], k9 = ["title"], V9 = ["title"], G9 = ["title"], j9 = ["title"], U9 = ["title"], Z9 = ["title"], W9 = ["title"], K9 = ["title"], Y9 = ["title"], J9 = ["title"], X9 = ["title"], Q9 = ["title"], q9 = ["title"], ec = ["title"], tc = ["title"], ac = ["title"], nc = ["title"], rc = ["title"], lc = ["title"], ic = ["title"], dc = ["title"];
function c() {
  return c = Object.assign || function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, c.apply(this, arguments);
}
function s(n, e) {
  if (n == null)
    return {};
  var t = cc(n, e), r, l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    for (l = 0; l < i.length; l++)
      r = i[l], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function cc(n, e) {
  if (n == null)
    return {};
  var t = {}, r = Object.keys(n), l, i;
  for (i = 0; i < r.length; i++)
    l = r[i], !(e.indexOf(l) >= 0) && (t[l] = n[l]);
  return t;
}
var q2 = function(e) {
  var t = e.title, r = s(e, M6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M440.1 181.1c-.1 39.2-6.4 81.4-57.4 101.5-51.1-20.1-57.3-62.3-57.4-101.5h114.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#29DBFF",
    d: "M439.6 197.7c-2.8 34.9-12.4 67.4-57 85-44.4-17.6-54.5-51.2-56.9-84.9"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M437.8 214.1c-3.2 24.3-16.7 53.5-55.1 68.6-38.4-15.1-50.5-42.5-55.1-68.4"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#29DBFF",
    d: "M434.2 230.3c-5.7 17.7-19.3 39.4-51.3 52.8-32-12.6-45.2-33.8-51.4-53"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M426.7 246.9c-6.5 11.3-17.7 25.4-44 35.9-27.5-11.5-37.4-25.3-44-36.1"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#29DBFF",
    d: "M412.4 265.1c-8.1 7.2-12 11.2-29.6 17.9-20.1-7.9-22.6-11.6-29.2-17.5"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#5CC85C",
    d: "M383.3 231.6c-.2-.2-27.9 35.7-27.9 35.7-1.8-1.3-10-9.5-13.3-15l41.3-50.1 40.2 49.7c-3.9 6.5-11.4 13.6-13.2 15M382.6 85.3l-26.5 45h53z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-82.3 291.431 225.686)",
    fill: "#F7A226",
    cx: 291.4,
    cy: 225.7,
    rx: 48.7,
    ry: 15.7
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-68.099 303.087 164.67)",
    fill: "#DDC7AB",
    cx: 303.1,
    cy: 164.7,
    rx: 11.7,
    ry: 7.2
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-81.738 291.697 271.697)",
    fill: "#DDC7AB",
    cx: 291.7,
    cy: 271.7,
    rx: 11.4,
    ry: 3.3
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "matrix(.9986 -.05353 .05353 .9986 -13.992 16.424)",
    fill: "#DDC7AB",
    cx: 299.6,
    cy: 269.4,
    rx: 3.3,
    ry: 11
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-21.518 314.54 201.06)",
    fill: "#DDC7AB",
    cx: 314.5,
    cy: 201.1,
    rx: 4.1,
    ry: 13.7
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-21.518 317.511 178.077)",
    fill: "#DDC7AB",
    cx: 317.5,
    cy: 178.1,
    rx: 13.7,
    ry: 4.1
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-7.7 473.781 225.857)",
    fill: "#F7A226",
    cx: 473.6,
    cy: 225.9,
    rx: 15.7,
    ry: 48.7
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-21.901 462.057 164.866)",
    fill: "#DDC7AB",
    cx: 462,
    cy: 164.9,
    rx: 7.2,
    ry: 11.7
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-8.27 473.27 271.908)",
    fill: "#DDC7AB",
    cx: 473.4,
    cy: 271.9,
    rx: 3.3,
    ry: 11.4
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "matrix(.05353 -.9986 .9986 .05353 171.34 719.998)",
    fill: "#DDC7AB",
    cx: 465.5,
    cy: 269.6,
    rx: 11,
    ry: 3.3
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-68.482 450.552 201.247)",
    fill: "#DDC7AB",
    cx: 450.6,
    cy: 201.2,
    rx: 13.7,
    ry: 4.1
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-68.482 447.58 178.265)",
    fill: "#DDC7AB",
    cx: 447.6,
    cy: 178.3,
    rx: 4.1,
    ry: 13.7
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#B0C6CC",
    d: "M373.3 130.3 356.1 155l17.8 26.1H396l4.7-25.4-5.4-25.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6-77.8-53.3h22.6l62.5 42.3v11z"
  }));
}, e3 = function(e) {
  var t = e.title, r = s(e, F6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342zM198.9 113.6H256v64.8h-57.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M267.6 113.6v64.7m16.6-64.7v64.7m16.6-64.7v64.7",
    stroke: "#D80027",
    strokeWidth: 7
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M247.4 178.4v64.7m-13.3-64.7v64.7m-13.3-64.6v53.9m-13.7-53.9v47.1",
    stroke: "#D80027",
    strokeWidth: 5
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m199.9 146 27.6-32.4 28.5 32.3-28.1 32.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#BC8B00",
    d: "M182.2 95.9v92.2c0 34.3 27.3 54.2 48.6 64.5-.8 1.4 25.1 8.3 25.1 8.3s25.9-6.9 25.1-8.3c21.4-10.3 48.6-30.1 48.6-64.5V95.9H182.2zm129.9 92.2c0 16.9-10 29.4-32.8 43.9-8.6 5.5-17.5 9-23.3 11-5.8-2-14.7-5.5-23.3-11-22.8-14.5-32.8-28-32.8-43.9v-74.5h112.2v74.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M264.4 188.9h29.5v8.6h-29.5zm0 17.6h29.5v8.6h-29.5z"
  }));
}, t3 = function(e) {
  var t = e.title, r = s(e, H6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#009e49",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ce1126",
    d: "M0 0h171v342H0z"
  }));
}, a3 = function(e) {
  var t = e.title, r = s(e, b6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#DB3E00",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#479900",
    d: "M331 0h182v342H331z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h181.8v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 126.7c-19.4 0-35.2 15.8-35.2 35.2v52.8h70.4v-52.8c0-19.5-15.8-35.2-35.2-35.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 84.3c-47.7 0-86.4 38.7-86.4 86.4S208.3 257 256 257s86.4-38.7 86.4-86.4-38.7-86.3-86.4-86.3zm0 157.7c-39.4 0-71.4-32-71.4-71.4 0-39.4 32-71.4 71.4-71.4 39.4 0 71.4 32 71.4 71.4 0 39.5-32 71.4-71.4 71.4z"
  }));
}, n3 = function(e) {
  var t = e.title, r = s(e, C6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0072c6",
    d: "M88.8 136.5c-2.2 12.9-3.4 26.2-3.4 39.8 0 13.6 1.2 27 3.4 39.8L256 228.3l167.2-12.1c2.2-12.9 3.4-26.2 3.4-39.8s-1.2-27-3.4-39.8"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M423.2 219H88.8c15.8 69.8 84.7 122.3 167.2 122.3S407.4 288.8 423.2 219z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M365.9 136.5H146.1l44.9-21.1-23.9-43.5 48.8 9.4L222 32l34 36.2L290 32l6.1 49.3 48.8-9.4-23.9 43.5z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#ce1126"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M256.5 342 0 0v342z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M513 342V0L256 342z"
  })));
}, r3 = function(e) {
  var t = e.title, r = s(e, _6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#00318b",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M454.8 265.38c7.94-10.93 13.24-24.27 13.24-40.42V104.89a59.754 59.754 0 0 1-36.02 12.01c-19.64 0-37.07-9.43-48.03-24.01-10.95 14.58-28.39 24.01-48.03 24.01-13.52 0-25.99-4.47-36.02-12v120.06c0 16.16 5.3 29.5 13.24 40.42H454.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#8DCCFF",
    d: "M310.23 260.98C332.65 296.96 384 309 384 309s51.35-12.04 73.77-48.02H310.23z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D87B00",
    d: "M396.66 172.21c.32 1.42 8.72 10.17 17.56 20.15 1.39 1.57-8.74 12.63-6.91 12.59 4.75-.12 19.27-17.26 19.34 6.65.05 15.94-30 27.51-30 27.51h17.47l.65 14.96s4.97-13.34 7.59-16.57c8.1-9.97 20.18-30.07 34.59-27.1 14.41 2.97-13.66-13.92-13.66-13.92s-5.2-15.19-16.63-16.97c-10.06-1.57-14.29-2.51-26.64-7.3-1.68-.65-3.88-2.32-3.36 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D87B00",
    d: "M359.69 198.69c1.07-.99 4.46-12.63 8.69-25.28.67-1.99 15.31 1.27 14.35-.3-2.47-4.06-24.58-8.08-3.9-20.08 13.79-8 38.82 12.27 38.82 12.27l-8.72-15.14 12.64-8.03s-14.05 2.35-18.14 1.69c-12.68-2.04-36.13-2.48-40.75-16.45-4.62-13.97-5.25 18.79-5.25 18.79s-10.56 12.08-6.4 22.88c3.66 9.5 4.96 13.64 6.97 26.73.29 1.79-.06 4.53 1.69 2.92z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D87B00",
    d: "M395.67 219.87c-1.39-.43-13.16 2.49-26.22 5.18-2.06.42-6.59-13.88-7.47-12.26-2.27 4.17 5.36 25.31-15.41 13.45-13.84-7.91-8.89-39.73-8.89-39.73l-8.71 15.14-13.29-6.9s9.09 10.96 10.57 14.84c4.6 11.99 16 32.49 6.24 43.49-9.76 11.01 18.88-4.9 18.88-4.9s15.76 3.07 23-5.96c6.38-7.94 9.3-11.14 19.61-19.45 1.43-1.12 3.97-2.19 1.69-2.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256.5 0h-23.1L160 48.9V0H96v48.9L22.6 0H0v22.7l46.1 30.7H0v64h46.1L0 148.1V171h22.6L96 121.8V171h64v-49.2l73.4 49.2h23.1v-22.9l-46.6-30.7h46.6v-64h-46.6l46.6-30.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.4H0v32h112V171h32v-69.6h112.5v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 171v-11.3l62.5-42.3h22.6L7.3 171zM7.3.1l77.8 53.2H62.5L0 11.1V.1zm249.2 0v11l-63 42.3h-22.6L248.7.1zM248.7 171l-77.8-53.6h22.6l63 42.3V171z"
  }));
}, l3 = function(e) {
  var t = e.title, r = s(e, N6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 90 60"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#ED2024",
    d: "M0 0h90v60H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#212121",
    d: "M32.5 12.2v16l7.1 2.5-5 4.9 2.4 3 5.3-5.5 1.2 2.3-3 4.9 3.6 5.6-1.8 2.6 2.8 3.6 2.7-3.7-1.5-2.6 3-5.8-2.7-4.6 1.2-2.3 5.2 5.5 2.5-2.9-5.2-5.1 7.2-2.6V12.2l-5.2 1.9-.1 3.8-3.3.3v-2.6l1.7-2.3 5.6-2.2-2.3-.4 1.4-1.2.9.4-.8-1.4L54 9l-1-1.1L47.5 9l1.4 1.1-3.8 4.9-3.8-4.8 1.3-1.1-5-1.2L36.2 9l-1.5-.4-.8 1.4.9-.6 1.6 1.1-2.3.5 5.5 2 1.6 2.3v2.9l-3.3-.3v-3.6z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M26.2 25h6.4v2.5h-6.4zm0-4.1h6.4v2.7h-6.4zm0-4.2h6.4v2.6h-6.4zm0-4h6.4v2.5h-6.4zM57.4 25h6.4v2.5h-6.4zm0-4.1h6.4v2.7h-6.4zm0-4.2h6.4v2.6h-6.4zm0-4h6.4v2.5h-6.4zM53.4 36.1h6.4V38h-6.4zm-23.2 0h6.4V38h-6.4z",
    fill: "#212121"
  }));
}, i3 = function(e) {
  var t = e.title, r = s(e, A6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M0 228h513v114H0z"
  }));
}, d3 = function(e) {
  var t = e.title, r = s(e, D6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    d: "M0 171h513v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFDA44"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m332.7 135.6 17.5-8.6-7.4-19-18.7 6.2zm-45.6-56 5.5-18.8-19.1-7.2-8 18zm29.4 23.2 12.2-15.3-14.9-13.9-14.2 13.6zm19.4 68.9 19.5-.8v-21.3l-22.9.2zm-12.6 38.1 18.8 5.5 7.3-19-18-8zm-29 32.4 14.9 12.7 14.4-14.4-13.1-14.7zm-47-147.7 9.8 19.9 21.9 3.3-15.9 15.5 3.6 21.9-19.6-10.4-19.7 10.2 3.8-21.9-15.8-15.5 22-3.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m250.8 61.3-2.7 18.3c43.1 3.2 77 39.2 77 83.1 0 46-37.3 82.9-83.4 83.4-29.2.3-51.3-14.8-67-33.7l-13.9 12.3c15 19 40.8 39.9 80.9 39.9 56.3 0 101.9-45.6 101.9-101.9.1-53.2-40.7-96.9-92.8-101.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#000",
    d: "m291.9 223.4-11.8 14s51.9 38.9 53.6 40.4c1.7 1.5 5.2 2 9.1-2.7 3.7-4.5 2.8-8.1.9-9.7-2-1.5-51.8-42-51.8-42z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M206.1 157.2c-7.7 10.3-7.5 23.1 2.8 30.9 0 0 135.2 101.5 136.9 103 1.7 1.5 5.2 2 9.1-2.7 3.7-4.5 2.8-8.1.9-9.7-1.9-1.5-149.7-121.5-149.7-121.5zm47.7 99.1 7.3 18.2 19.5-6-4.8-19.1zm-40.4-3.7-2 19.5 20.1 3.6 4.5-19.1zm-35.7-21.2L167.4 248l16.4 12.1 12.5-15.2z"
  })));
}, c3 = function(e) {
  var t = e.title, r = s(e, P6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 744 496"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#3A7DCE",
    d: "M0 0h744v496H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "m120 125 90 63 54-14 23-81 61-36 92 14 105 55 6 90 34 12v92l-65 115-78 24-72-17 18-30-8-32-10 9-162-25-49-85 20-46-49-62z"
  }));
}, s3 = function(e) {
  var t = e.title, r = s(e, S6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h512v114H0zm0 228h512v114H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFDA44",
    stroke: "#d6ab00",
    strokeWidth: 5,
    cx: 256.5,
    cy: 171,
    r: 40
  }));
}, o3 = function(e) {
  var t = e.title, r = s(e, T6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#10338c",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M513 33 95.3 171 513 310.76V342L0 171 513 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 287.18v24.58L81.72 171 513 30v24.16"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "m476.98 140.21-21.89 10.68-3.18-15.32 31.19-29.77s-9.42-40.65-13.75-44.98l-112.32 55.82-6.84 36.76-31.9 28.59-.4 34.2 34.29-22.76 67.23-2.66-1.51 38.11h22.23l11.9-44.64 31.55-24.61-6.6-19.42z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#EFC100",
    stroke: "#231F20",
    strokeMiterlimit: 10,
    d: "m317.89 238.41-22.24-11.11 22.24-11.11h144.46v22.22z"
  }));
}, h3 = function(e) {
  var t = e.title, r = s(e, B6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0zm0 228h513v114H0z"
  }));
}, u3 = function(e) {
  var t = e.title, r = s(e, L6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#10338c",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M222.2 170.7c.3-.3.5-.6.8-.9-.2.3-.5.6-.8.9zM188 212.6l11 22.9 24.7-5.7-11 22.8 19.9 15.8-24.8 5.6.1 25.4-19.9-15.9-19.8 15.9.1-25.4-24.8-5.6 19.9-15.8-11.1-22.8 24.8 5.7zm197.9 28.5 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6v12.2l-9.4-7.6-9.5 7.6.1-12.2-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zm-48.6-116 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.9-2.7 9.5-7.5-5.3-10.9L332 136zm48.6-66.2 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.8-2.7 9.5-7.5-5.3-10.9 11.8 2.7zm42.5 49.7 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6V150l-9.4-7.6-9.5 7.6v-12.2l-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zM398 166.5l4.1 12.7h13.3l-10.8 7.8 4.2 12.7-10.8-7.9-10.8 7.9 4.1-12.7-10.7-7.8h13.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M254.8 0v30.6l-45.1 25.1h45.1V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9H99v-48.6l-87.4 48.6H-1.2v-30.6L44 115H-1.2V55.7h59.1L-1.2 22.8V0h26.7L99 40.8V0h55.6v48.6L242.1 0z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M142.8 0h-32v69.3h-112v32h112v69.4h32v-69.4h112v-32h-112z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "m154.6 115 100.2 55.7v-15.8L183 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m154.6 115 100.2 55.7v-15.8L183 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m154.6 115 100.2 55.7v-15.8L183 115zm-83.9 0-71.9 39.9v15.8L99 115z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M99 55.7-1.2 0v15.7l71.9 40z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M99 55.7-1.2 0v15.7l71.9 40z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M99 55.7-1.2 0v15.7l71.9 40zm84 0 71.8-40V0L154.6 55.7z",
    fill: "#D80027"
  }));
}, m3 = function(e) {
  var t = e.title, r = s(e, I6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 363 242"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h363v242H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M57 96.9 14.7 78.2 57 59.6l18.6-42.2 18.6 42.2 42.3 18.6-42.3 18.7-18.6 42.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f30028",
    d: "m75.6 40.6 11.5 26.1 26.1 11.5-26.1 11.5-11.5 26.1-11.5-26.1L38 78.2l26.1-11.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 152.2h363v15.7H0zm0 31.4h363v15.7H0z",
    fill: "#FFDA44"
  }));
}, f3 = function(e) {
  var t = e.title, r = s(e, O6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M513 210.9H202.2V342h-79.8V210.9H0v-79.8h122.4V0h79.8v131.1H513v61.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M513 149.7v42.6H183.7V342H141V192.3H0v-42.6h141V0h42.7v149.7z"
  }));
}, v3 = function(e) {
  var t = e.title, r = s(e, R6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#ef3340",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00b5e2",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#509e2f",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M265.6 212.6c-23 0-41.6-18.6-41.6-41.6s18.6-41.6 41.6-41.6c7.2 0 13.9 1.8 19.8 5-9.2-9-21.9-14.6-35.8-14.6-28.3 0-51.2 22.9-51.2 51.2s22.9 51.2 51.2 51.2c13.9 0 26.6-5.6 35.8-14.6-5.9 3.2-12.6 5-19.8 5z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m297.6 142.2 5.5 15.5 14.9-7.1-7.1 14.9 15.5 5.5-15.5 5.5 7.1 14.9-14.9-7.1-5.5 15.5-5.5-15.5-14.9 7.1 7.1-14.9-15.5-5.5 15.5-5.5-7.1-14.9 14.9 7.1z"
  })));
}, p3 = function(e) {
  var t = e.title, r = s(e, k6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#10338C",
    d: "M0 0h513.1v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#F6C500",
    d: "M99.9 0h342v342"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M19.9 21.1 40.3 6.2 60.9 21 54 0H26.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M92.3 25.5 84.4 1.3l-7.8 24.2H51.3l20.5 14.8-7.8 24 20.4-14.8L105 64.3l-7.9-24 20.5-14.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m136.3 69.2-7.8-24-7.8 24H95.5l20.4 14.9-7.8 24 20.4-14.8 20.6 14.8-7.8-24 20.4-14.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m179.4 112.3-7.8-24.1-7.8 24.1h-25.3l20.5 14.9-7.8 24 20.4-14.8 20.6 14.8-7.9-24 20.5-15z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m222.5 155.3-7.8-24-7.8 24h-25.4l20.6 15-7.8 24 20.4-14.9 20.4 14.9-7.8-24 20.6-15z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m265.6 198.4-7.8-24-7.8 24h-25.4l20.6 14.9-7.8 24.1 20.4-14.9 20.4 14.9-7.8-24.2 20.5-14.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m308.7 241.5-7.9-24-7.8 24h-25.3l20.5 14.8-7.9 24.2 20.6-14.9 20.4 14.8-7.8-24.1 20.5-14.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m351.7 284.6-7.8-24.2-7.8 24.2h-25.3l20.4 14.8-7.8 24.1 20.5-14.9 20.5 14.9-7.8-24.1 20.4-14.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m387 303.5-7.9 24.1-25.3.1 19.8 14.3h26.6l19.9-14.4h-25.3z"
  })));
}, g3 = function(e) {
  var t = e.title, r = s(e, V6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffc726",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h171v342H0zm342 0h171v342H342z",
    fill: "#00267f"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m325.74 101.02-31.97 12.4c-.68 1.35-5.79 7.54-8.18 53.06h-17.05v-60.42L256 78.68l-12.54 27v60.8H226.4c-2.39-45.53-7.8-52.48-8.47-53.84l-31.68-11.63c.15.31 15.4 31.34 15.4 78.01v12.54h41.81v71.07h25.08v-71.07h41.81v-12.54c0-24.13 4.17-44.02 7.68-56.46 3.82-13.57 7.7-21.49 7.74-21.57l-.03.03z"
  }));
}, $3 = function(e) {
  var t = e.title, r = s(e, G6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#2d6e41",
    d: "M0 85.331h513v342H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#F40B32",
    cx: 218.902,
    cy: 256.5,
    r: 115
  }));
}, E3 = function(e) {
  var t = e.title, r = s(e, j6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#fdda25",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ef3340",
    d: "M342 0h171v342H342z"
  }));
}, w3 = function(e) {
  var t = e.title, r = s(e, U6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#3d944f",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ef2b2d",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m256 102.6 16.9 52h54.7l-44.2 32.2 16.8 52-44.2-32.1-44.2 32.1 16.8-52-44.2-32.2h54.7z"
  }));
}, z3 = function(e) {
  var t = e.title, r = s(e, Z6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#00966e",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#d62612",
    d: "M0 228h513v114H0z"
  }));
}, y3 = function(e) {
  var t = e.title, r = s(e, W6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m222.8 34.3-85.2 34.2 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.8H0V0h137.6z"
  }));
}, x3 = function(e) {
  var t = e.title, r = s(e, K6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M215.9 170.7 0 314.6V26.8zM513 26.8v287.8L297.1 170.7z",
    fill: "#47a644"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M513 26.8 296.1 170.7 513 314.6V342h-41.1L256 197.4 40.1 342H0v-27.4l215.9-143.9L0 26.8V0h40.1L256 143.9 471.9 0H513z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 26.8 297.1 170.7 513 314.6V342h-40L256 197.4 39 342H0v-27.4l215.9-143.9L0 26.8V0h40.1L256 143.9 471.9 0H513z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 251.6,
    cy: 170.7,
    r: 100.2
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m251.4 103.6 7.4 12.9h14.8l-7.4 12.8 7.4 12.8h-14.8l-7.4 12.9-7.4-12.9h-14.8l7.4-12.8-7.4-12.8H244zm38.8 66.7 7.4 12.9h14.8L305 196l7.4 12.8h-14.8l-7.4 12.9-7.4-12.9h-14.9l7.4-12.8-7.4-12.8h14.9zm-77.2 0 7.4 12.9h14.9l-7.4 12.8 7.4 12.8h-14.9l-7.4 12.9-7.4-12.9h-14.8l7.4-12.8-7.4-12.8h14.8z",
    fill: "#D80027",
    stroke: "#47a644",
    strokeWidth: 3
  }));
}, M3 = function(e) {
  var t = e.title, r = s(e, Y6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#008751",
    d: "M0 85.333h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fcd116",
    d: "M196.666 85.333H513v171H196.666z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#e8112d",
    d: "M196.666 256H513v171H196.666z"
  }));
}, F3 = function(e) {
  var t = e.title, r = s(e, J6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E6BC00",
    d: "M157.31 199.76s-9.04 43.93-19.31 40.39c-10.62-3.54-17.53-18.76-17.53-18.76l-14.52 21.24s38.18 8.48 41.01 5.47c1.22-1.14 8.21-15.1 10.34-26.05v-22.29zm-56.13 60.57s-2.48 20.18-1.06 22.66c1.24 2.3 39.48 11.33 39.48 11.33s-24.96 16.46-29.74 20.54L91.8 284.94l-.71-24.61h10.09zm11.33-165.69s39.65 41.6 40.36 45.5c.71 3.72-4.25 3.19-4.25 3.19s-44.79-37.53-49.92-41.07c-5.31-3.55 13.81-7.62 13.81-7.62z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ADADAD",
    d: "M99.41 104.73s16.99-.71 16.64-11.51c-.35-10.62-11.15-14.87-19.12-12.39-7.97 2.3-23.01 13.45-13.63 35.05 9.38 21.42 23.37 29.39 26.2 47.8 0 0-5.46 9.86-19.12.35-16.9-11.77-6.2-38.24-10.44-44.96-4.25-7.08-40.95-38.92-40.95-38.92s-30.24 39.37-18 74.92c16.95 49.21 51.74 31.98 64.61 36.76 0 0-42.13 61.96-49.57 67.09 0 0 24.08 8.32 47.8-18.76 0 0 5.84 9.74 7.08 20.18h10.27c4.78-26.2 51.51-64.26 49.92-82.32-1.77-21.25-49.21-49.39-51.69-73.29z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E6BC00",
    d: "M359.17 201.27s8.96 42.43 19.23 38.89c10.62-3.54 17.53-18.76 17.53-18.76l14.52 21.24s-37 8.48-39.83 5.47c-1.21-1.14-9.32-13.79-11.52-24.66l.07-22.18zm56.05 59.06s2.48 20.18 1.06 22.66c-1.24 2.3-39.48 11.33-39.48 11.33s24.96 16.46 29.74 20.54l18.06-29.92.71-24.61h-10.09zM403.89 94.64s-39.65 41.6-40.36 45.5c-.71 3.72 4.25 3.19 4.25 3.19s44.79-37.53 49.92-41.07c5.14-3.55-13.81-7.62-13.81-7.62z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#125ECC",
    d: "M157.31 87.06H359.1v145.46c0 16.06-9.69 21.39-21.91 31.85l-45.92 39.41c-18.25 15.62-47.91 15.57-66.07 0l-46.01-39.43c-12.08-10.35-21.88-15.71-21.88-31.82V87.06z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFE600",
    d: "M200.55 147.71c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65-3c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65 3c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zM214.96 274.43c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41c.01 7.96-6.45 14.41-14.41 14.41zm43.24 14.42c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41c0 7.95-6.45 14.41-14.41 14.41zm43.24-14.42c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D60537",
    d: "M157.31 175.36H359.1v57.65H157.31v-57.65z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#EACE00",
    d: "M142.9 43.82s57.65-14.41 115.31-14.41 115.31 14.41 115.31 14.41l-14.41 57.65s-50.45-14.41-100.89-14.41-100.89 14.41-100.89 14.41L142.9 43.82z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#7A6920",
    d: "M258.2 72.65c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65 5c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm-115.3 0c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ADADAD",
    d: "M365.08 178.02c-1.59 18.06 45.14 56.12 49.92 82.32h10.27c1.24-10.44 7.08-20.18 7.08-20.18 23.72 27.09 47.8 18.76 47.8 18.76-7.44-5.13-49.57-67.09-49.57-67.09 12.88-4.78 47.67 12.45 64.61-36.76 12.24-35.55-18-74.92-18-74.92s-36.7 31.84-40.95 38.92c-4.25 6.73 6.46 33.2-10.44 44.96-13.66 9.51-19.12-.35-19.12-.35 2.83-18.41 16.82-26.38 26.2-47.8 9.38-21.6-5.66-32.75-13.63-35.05-7.97-2.48-18.76 1.77-19.12 12.39-.35 10.8 16.64 11.51 16.64 11.51-2.48 23.9-49.92 52.04-51.69 73.29z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 258.2,
    cy: 204.19,
    r: 16.93
  }));
}, H3 = function(e) {
  var t = e.title, r = s(e, X6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#c8102e",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#012169",
    d: "M0 .1h256.5v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0h-22.6L160 48.9V0H96v48.9L22.6 0H0v22.7l46.1 30.7H0v64h46.1L0 148.1v22.6h22.6L96 121.8v48.9h64v-48.9l73.4 48.9H256v-22.6l-46.1-30.7H256v-64h-46.1L256 22.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#c8102e",
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#c8102e",
    d: "M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6-77.8-53.3h22.6l62.5 42.3v11z"
  }), /* @__PURE__ */ a.createElement("g", {
    transform: "translate(13 5)"
  }, /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "M303.9 94.94v99.69c0 59.81 79.75 99.69 79.75 99.69s79.75-39.88 79.75-99.69V94.94H303.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2F8F22",
    d: "M436.37 254.44H330.93c23.13 25.08 52.72 39.88 52.72 39.88s29.59-14.8 52.72-39.88z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#65B5D2",
    cx: 383.65,
    cy: 214.56,
    r: 39.88
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#c8102e",
    cx: 343.77,
    cy: 194.63,
    r: 19.94
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#c8102e",
    cx: 423.52,
    cy: 194.63,
    r: 19.94
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#c8102e",
    cx: 383.65,
    cy: 154.75,
    r: 19.94
  })));
}, b3 = function(e) {
  var t = e.title, r = s(e, Q6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m0 193.74 513 127.19V214.26L0 97.08z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 234.26v-86.67L0 20.41v86.67"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027",
    stroke: "#231F20",
    strokeWidth: 3,
    strokeMiterlimit: 10
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M306.4 134.01a50.28 50.28 0 0 1 6.07 24.02c0 21.55-13.51 39.94-32.52 47.19v-59.51c5.7-1.19 10-6.37 10-12.59 6.9 0 12.5-5.75 12.5-12.85h-.42c6.9 0 12.91-5.75 12.91-12.85h-34.99V76.58l-14.99-27.71-15 27.71v30.84h-34.99c0 7.1 6.01 12.85 12.91 12.85h-.42c0 7.1 5.6 12.85 12.5 12.85 0 6.22 4.29 11.4 9.99 12.59v61.37c-22.09-5.39-38.48-25.3-38.48-49.05 0-8.7 2.2-16.88 6.07-24.02-10.96 11.21-17.72 26.53-17.72 43.44 0 34.32 27.82 62.15 62.15 62.15s62.15-27.83 62.15-62.15c0-16.91-6.77-32.24-17.72-43.44z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M198.46 226.81s20.69 27.71 66.5 27.71 66.5-27.71 66.5-27.71l13.47 28.37s-21.03 27.71-79.97 27.71-79.97-27.71-79.97-27.71l13.47-28.37zm-69.22-93.63h20.88l24.93 27.26v73.45h-26.28v-68.37zm270.76 0h-20.88l-24.93 27.26v73.45h26.27v-68.37z"
  })));
}, C3 = function(e) {
  var t = e.title, r = s(e, q6);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#d52b1e",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f9e300",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#007934",
    d: "M0 228h513v114H0z"
  }));
}, _3 = function(e) {
  var t = e.title, r = s(e, e7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#012a87",
    d: "M0 342h513V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f9d90f",
    d: "M250.4 0H0v166.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#dc171d",
    d: "m140.4 118.3 12.2 21.2h24.5l-12.3 21.1 12.3 21.2h-24.5L140.4 203l-12.2-21.2h-24.5l12.3-21.2-12.3-21.1h24.5z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "none",
    stroke: "#000",
    strokeWidth: 9,
    strokeMiterlimit: 10,
    cx: 140.4,
    cy: 160.6,
    r: 57.7
  }));
}, N3 = function(e) {
  var t = e.title, r = s(e, t7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#009b3a",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fedf00",
    d: "m256.5 19.3 204.9 151.4L256.5 322 50.6 170.7z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 256.5,
    cy: 171,
    r: 80.4
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#002776",
    d: "M215.9 165.7c-13.9 0-27.4 2.1-40.1 6 .6 43.9 36.3 79.3 80.3 79.3 27.2 0 51.3-13.6 65.8-34.3-24.9-31-63.2-51-106-51zm119 20.3c.9-5 1.5-10.1 1.5-15.4 0-44.4-36-80.4-80.4-80.4-33.1 0-61.5 20.1-73.9 48.6 10.9-2.2 22.1-3.4 33.6-3.4 46.8.1 89 19.5 119.2 50.6z"
  }));
}, A3 = function(e) {
  var t = e.title, r = s(e, a7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffc72c",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v114H0zm0 228h513v114H0z",
    fill: "#00778b"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256 171 0 342V0z"
  }));
}, D3 = function(e) {
  var t = e.title, r = s(e, n7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF7415",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M513 0H0v342"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "none",
    stroke: "#FFF",
    strokeWidth: 42,
    strokeMiterlimit: 10,
    d: "M128.7 255.5s35 54 67.3 32.4c56.9-37.9-68.9-108.6-2.9-152.6 58.3-38.8 76.6 103.5 137.6 62.8 59-39.3-64.7-111.4-9.2-148.4 33.4-22.2 67.1 32.6 67.1 32.6"
  }));
}, P3 = function(e) {
  var t = e.title, r = s(e, r7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 33.333 1100 733.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#ef2b2d",
    d: "M0 0h1100v800H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "M300 0h200v800H300z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "M0 300h1100v200H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#002868",
    d: "M350 0h100v800H350z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#002868",
    d: "M0 350h1100v100H0z"
  }));
}, S3 = function(e) {
  var t = e.title, r = s(e, l7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 238h513v104H0zM0 0h513v104H0z",
    fill: "#6da9d2"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 125.5h513v89.656H0z"
  }));
}, T3 = function(e) {
  var t = e.title, r = s(e, i7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#007C30",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#CE1720",
    d: "M0 230h513V0H0"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100 230V0H0v342h513-413z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M28 159.6 8.6 128.2 28 97.4l19.3 30.8zm44.6 0-19.3-31.4 19.3-30.8L92 128.2zM28 241.2 8.6 209.8 28 179l19.3 30.8zm44.6 0-19.3-31.4L72.6 179 92 209.8z",
    fill: "#CE1720"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m28 73.8-16.1-26L28 22.2l16 25.6zm44.6 0-16-26 16-25.6 16.1 25.6zM28 318l-16.1-26.1L28 266.3l16 25.6zm44.6 0-16-26.1 16-25.6 16.1 25.6z",
    fill: "none",
    stroke: "#CE1720",
    strokeWidth: 7
  }));
}, B3 = function(e) {
  var t = e.title, r = s(e, d7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#003e87",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 260.9,
    cy: 170.9,
    r: 118.9
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "none",
    stroke: "#6DA544",
    strokeWidth: 18,
    strokeMiterlimit: 10,
    cx: 261.9,
    cy: 173.1,
    r: 94.5
  }), /* @__PURE__ */ a.createElement("g", {
    stroke: "#000"
  }, /* @__PURE__ */ a.createElement("path", {
    fill: "#003e87",
    d: "m261.9 151.5-50.6 23.4v20c0 11.8 6.1 22.8 16.2 28.9L262 239l34.5-15.2c10-6.2 16.2-17.1 16.2-28.9v-20l-50.8-23.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M211.3 128.1h101.3v46.7H211.3z"
  })), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v35H0zm0 306h513v35H0z",
    fill: "#ce1127"
  }));
}, L3 = function(e) {
  var t = e.title, r = s(e, c7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h142v342H0zm371 0h142v342H371zm-64.5 206 50.4-25.2-25.2-12.6V143l-50.4 25.2 25.2-50.4h-25.2L256.1 80l-25.2 37.8h-25.2l25.2 50.4-50.4-25.2v25.2l-25.2 12.6 50.4 25.2-12.6 25.2h50.4V269h25.2v-37.8h50.4z",
    fill: "red"
  }));
}, I3 = function(e) {
  var t = e.title, r = s(e, s7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "green",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m422.7 252.4 6.2 12.8 13.8-3.2-6.2 12.8 11.2 8.8-13.9 3.2V301l-11.1-8.9-11.1 8.9v-14.2l-13.8-3.2 11.1-8.8-6.2-12.8 13.9 3.2zm-46.6-136.3 6.2 12.9 13.8-3.2-6.2 12.8 11.2 8.8-13.9 3.1v14.3l-11.1-8.9-11.1 8.9.1-14.3-13.9-3.1 11.1-8.8-6.2-12.8L370 129zm37-77.8 6.2 12.8 13.8-3.2-6.2 12.8 11.2 8.9-13.9 3.1v14.2L413.1 78 402 86.9l.1-14.2-13.9-3.1 11.1-8.9-6.2-12.8 13.9 3.2zm51.8 58.4 6.2 12.8 13.9-3.2-6.3 12.8 11.2 8.9-13.9 3.1.1 14.2-11.2-8.9-11.1 8.9.1-14.2L440 128l11.2-8.9-6.3-12.8 13.9 3.2zm-28 68.1 4.9 14.8h15.6l-12.6 9.2 4.8 14.9-12.7-9.2-12.6 9.2 4.8-14.9-12.6-9.2h15.6zM306.8 254.7c-49.2 0-89.1-39.9-89.1-89.1s39.9-89.1 89.1-89.1c15.3 0 29.8 3.9 42.4 10.7C329.4 67.9 302.3 56 272.5 56c-60.5 0-109.6 49.1-109.6 109.6S212 275.3 272.5 275.3c29.8 0 56.9-11.9 76.6-31.3-12.6 6.8-27 10.7-42.3 10.7zM140.4 59.5C129.7 41 109.7 28.6 86.8 28.6S44 41 33.3 59.5h107.1zm.2.4-53.8 53.8-53.7-53.8C28 68.9 25 79.3 25 90.5c0 34.2 27.7 61.9 61.9 61.9s61.9-27.7 61.9-61.9c-.1-11.2-3.1-21.6-8.2-30.6z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M71.4 98.2v52.2c4.9 1.3 10.1 1.9 15.5 1.9s10.5-.7 15.5-1.9V98.2h-31z"
  }));
}, O3 = function(e) {
  var t = e.title, r = s(e, o7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M513 66.9V0H411.7L0 274.4V342h100.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M513 0v40.1L60.2 342H0v-40.8L451.8 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m93.6 31.2 16.3 50.4H163l-42.9 31.2 16.4 50.5-42.9-31.2-43 31.2L67 112.8 24.1 81.6h53.1z"
  }));
}, R3 = function(e) {
  var t = e.title, r = s(e, h7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#d21034",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 171h211.5v85.3H0zm300.5 0H512v85.3H300.5z",
    fill: "#3a9927"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#003082",
    d: "M0 0v85.3h211.5V0h89v85.3H513V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M300.5 85.3H512v85.3H300.5zM0 85.3h211.5v85.3H0z",
    fill: "#FFF"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M300.5 342h-89v-86H0v86h513v-86H300.5zM105.7 8.6l8.6 26.2h27.5L119.5 51l8.6 26.2L105.7 61 83.4 77.2 91.9 51 69.6 34.8h27.6z",
    fill: "#ffce00"
  }));
}, k3 = function(e) {
  var t = e.title, r = s(e, u7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#da1a35",
    d: "M0 85.331h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#009543",
    d: "M443.726 85.331 102.4 426.657H0V85.331z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fbde4a",
    d: "M500.124 85.331 158.798 426.657H11.876L353.202 85.331z"
  }));
}, V3 = function(e) {
  var t = e.title, r = s(e, m7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "red",
    d: "M0 85.337h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M356.174 222.609h-66.783v-66.783h-66.782v66.783h-66.783v66.782h66.783v66.783h66.782v-66.783h66.783z"
  }));
}, G3 = function(e) {
  var t = e.title, r = s(e, f7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#009e60",
    d: "M342 0h171v342H342z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f77f00",
    d: "M0 0h171v342H0z"
  }));
}, j3 = function(e) {
  var t = e.title, r = s(e, v7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#01237a",
    d: "M0 85.332h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m384 156.705 5.283 16.254h17.089l-13.826 10.045 5.281 16.254L384 189.211l-13.825 10.047 5.28-16.254-13.825-10.045h17.089zm-70.209 29.081 15.228 7.758 12.084-12.083-2.673 16.879 15.227 7.759-16.879 2.673-2.674 16.88-7.76-15.227-16.878 2.673 12.086-12.084zm-29.081 70.209 16.254-5.281.001-17.089 10.044 13.825 16.254-5.282-10.046 13.827 10.046 13.826-16.254-5.28-10.044 13.825v-17.09zm29.081 70.209 7.759-15.229-12.084-12.084 16.881 2.674 7.757-15.227 2.674 16.879 16.879 2.672-15.227 7.759 2.673 16.882-12.084-12.087zM384 355.284l-5.281-16.253h-17.091l13.827-10.045-5.28-16.254L384 322.776l13.827-10.044-5.281 16.254 13.826 10.045h-17.089zm70.209-29.08-15.229-7.758-12.083 12.084 2.673-16.882-15.227-7.756 16.879-2.675 2.675-16.879 7.756 15.227 16.881-2.674-12.086 12.085zm29.081-70.209-16.254 5.281v17.09l-10.045-13.826-16.254 5.281 10.046-13.826-10.046-13.827 16.254 5.282 10.045-13.825v17.089zm-29.081-70.207-7.757 15.226 12.082 12.084-16.881-2.673-7.756 15.227-2.675-16.88-16.879-2.675 15.227-7.757-2.673-16.878 12.084 12.082zM0 186.665v16h46.069L0 233.377v7.539l57.377-38.252H80L0 255.998h112v-69.334H0zm96 69.331H22.628L96 207.083v48.913zm80-117.331 80-53.334H144v69.334h112v-16h-46.069L256 107.951v-7.539l-57.377 38.251H176v.002zm-16-53.332h73.372L160 134.246V85.333zm-16 170.665h112l-80-53.334h22.623L256 240.917v-7.539l-46.069-30.713H256v-16H144v69.333zm16-48.915 73.372 48.913H160v-48.913zM112 85.331H0l80 53.334H57.377L0 100.413v7.539l46.069 30.712H0v16h112V85.331zm-16 48.915L22.628 85.333H96v48.913z",
    fill: "#FFF"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144 85.331h-32v69.334H0v32h112v69.333h32v-69.333h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M80 138.665 0 85.331v15.082l57.377 38.252zm96 0h22.623L256 100.413V85.331zm-118.623 64L0 240.917v15.081l80-53.333zm118.623 0 80 53.333v-15.081l-57.377-38.252z"
  })));
}, U3 = function(e) {
  var t = e.title, r = s(e, p7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M196 0h317v171H196z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0037A1",
    d: "M0 0h196v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M98 24.5 113.1 71H162l-39.6 28.7 15.2 46.5L98 117.5l-39.6 28.7 15.2-46.5L34 71h48.9z"
  }));
}, Z3 = function(e) {
  var t = e.title, r = s(e, g7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#ce1126",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#007a5e",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M342 0h171v342H342zm-86 102.2 17.2 53H329L283.9 188l17.2 53-45.1-32.7-45.1 32.7 17.2-53-45.1-32.8h55.8z",
    fill: "#fcd116"
  }));
}, W3 = function(e) {
  var t = e.title, r = s(e, $7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m226.8 239.2-9.7-15.6-17.9 4.4 11.9-14.1-9.7-15.6 17.1 6.9 11.8-14.1-1.3 18.4 17.1 6.9-17.9 4.4zM290.6 82l-10.1 15.4 11.6 14.3-17.7-4.8-10.1 15.5-1-18.4-17.7-4.8 17.2-6.6-1-18.4 11.6 14.3zm-54.4-56.6-2 18.3 16.8 7.6-18 3.8-2 18.3-9.2-16-17.9 3.8 12.3-13.7-9.2-15.9 16.8 7.5zm56.6 136.4-14.9 10.9 5.8 17.5-14.9-10.8-14.9 11 5.6-17.6-14.9-10.7 18.4-.1 5.6-17.6 5.8 17.5zM115 46.3l17.3 53.5h56.2l-45.4 32.9 17.3 53.5-45.4-33-45.5 33 17.4-53.5-45.5-32.9h56.3z",
    fill: "#FFDA44"
  }));
}, K3 = function(e) {
  var t = e.title, r = s(e, E7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 256.5h513V342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 171h513v85.5H0z"
  }));
}, Y3 = function(e) {
  var t = e.title, r = s(e, w7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 285h513v57H0zM0 0h513v57H0z"
  }));
}, J3 = function(e) {
  var t = e.title, r = s(e, z7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M0-40.8v422.9-211.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v68.3H0zm0 136.5h513v68.3H0zm0 136.6h513v68.3H0z",
    fill: "#0052B4"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256 170.7 0 342V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m86.5 111.4 12.7 39.2h41.3l-33.4 24.2 12.8 39.3-33.4-24.2-33.4 24.2 12.8-39.3-33.4-24.2h41.2z"
  }));
}, X3 = function(e) {
  var t = e.title, r = s(e, y7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#003893",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#cf2027",
    d: "M0 182.2h513v41.4H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 140.8h513v41.4H0zm0 82.8h513V265H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m150.4 70 6.9 21.1h22.2l-18 13.1 6.9 21.1-18-13.1-17.9 13.1 6.8-21.1-17.9-13.1h22.2zm0 209.7 6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-17.9-13h22.2zm-97.6-70.9 6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-17.9-13H46zM90.1 91l6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-18-13h22.3zm-66.3 71H46l6.8-21.1 6.9 21.1h22.2l-18 13.1 6.9 21.1-18-13-17.9 13 6.8-21.1zm48.4 148.9 6.8-21.1-18-13h22.3l6.8-21.2 6.9 21.2h22.2l-18 13 6.9 21.1-18-13zM248 208.8l-6.9 21.1h-22.2l18 13-6.9 21.2 18-13.1 18 13.1-6.9-21.2 18-13h-22.2zM210.7 91l-6.8 21.1h-22.2l17.9 13-6.8 21.2 17.9-13.1 18 13.1-6.9-21.2 18-13h-22.2zm66.4 71h-22.2l-6.9-21.1-6.9 21.1h-22.2l18 13.1-6.9 21.1 18-13 18 13-6.9-21.1zm-48.4 148.9-6.9-21.1 18-13h-22.2l-6.9-21.2-6.8 21.2h-22.2l17.9 13-6.8 21.1 17.9-13z",
    fill: "#f7d116",
    stroke: "#000"
  }));
}, Q3 = function(e) {
  var t = e.title, r = s(e, x7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#002b7f",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f9e814",
    d: "M0 233.5h513v51H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m168.7 86.5 12.9 39.8h41.8l-33.8 24.5 12.9 39.7-33.8-24.5-33.8 24.5 12.9-39.7-33.8-24.5h41.8zm-83.3-54 7.8 23.9h25L97.9 71.1l7.8 23.8-20.3-14.7-20.3 14.7 7.8-23.8-20.3-14.7h25.1z",
    fill: "#FFF"
  }));
}, q3 = function(e) {
  var t = e.title, r = s(e, M7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0021ad",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1c8a42",
    d: "M0 0h513v342"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m77.6 272 5.7 11.9 12.8-3-5.7 11.9 10.3 8.1-12.8 2.9V317l-10.3-8.3-10.2 8.3v-13.2l-12.8-2.9 10.3-8.1-5.8-11.9 12.9 3zm-37.1-98.9 5.7 11.9 12.8-3-5.7 11.8 10.3 8.2-12.9 2.9.1 13.2-10.3-8.3-10.3 8.3.1-13.2-12.9-2.9 10.4-8.2L22 182l12.8 3zm37.1-80.9 5.7 11.8 12.8-2.9-5.7 11.8 10.3 8.2-12.8 2.9v13.1l-10.3-8.2-10.2 8.2V124l-12.8-2.9 10.3-8.2-5.8-11.8L72 104zm46.1 62.9 5.7 11.9 12.8-3-5.7 11.9 10.3 8.1-12.8 2.9v13.2l-10.3-8.2-10.2 8.2v-13.2l-12.8-2.9 10.3-8.1-5.7-11.9 12.8 3zm-32.9 54 4.4 13.7h14.5L98 231.3l4.5 13.7-11.7-8.4-11.7 8.4 4.5-13.7-11.7-8.5h14.4z",
    fill: "#FFF"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#ffc639",
    cx: 267.1,
    cy: 170.7,
    r: 74.5
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1c8a42",
    d: "M267.1 220.3h24.8s10.8-19 0-37.2l24.8-24.8-12.4-24.8h-12.4s-6.2 18.6-31 18.6-31-18.6-31-18.6h-12.4l12.4 24.8-12.4 24.8 12.4 12.4s12.4-24.8 37.2-12.4c0 0 10.5 15.5 0 37.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffc639",
    d: "M464.4 92.2c.6-2.9-.2-17.6-.2-20.7 0-21.3-13.9-39.4-33.2-45.7 5.9 12 9.2 25.4 9.2 39.7 0 4.8-.4 9.5-1.1 14.1-2.9-4.7-6.6-8.9-11.2-12.6-17.1-13.6-40.6-14-57.9-2.5 13.4 2.9 26.3 8.9 37.7 18 9 7.1 16.2 16.8 21.7 26.1 0 0-17.8 10.9-31 15.1s-42.3 7.9-42.3 7.9c72 12 132-36 132-36-6.5-13.4-15.8-4-23.7-3.4z"
  }));
}, ea = function(e) {
  var t = e.title, r = s(e, F7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#DB7D00",
    d: "M141.7 154.7s.2 67.1 74.7 65.3l4.5 13.9h8.9s-7.4-41.1 60.1-41.5c0 0 0-27.6 27.6-27.6H359s-66-51.8 58.9-118l1.8-13.1s-129.9 71-198.9 57.2c0 0 10.7 42.5-10.8 42.5-10.8 0-9.7-8.1-32.3-8.1-18.7 0-17.3 19.7-26.3 19.5-8.9-.2-18.8-12.3-19.6-10.2-.7 2.1 9.9 20.1 9.9 20.1z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#006651"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M237.2 308.1c6.9-5 13-6.6 22.4-8.3s19.4-4.4 24.6-5.8-17.7 6.6-23.5 8.3c-5.8 1.6-23.5 5.8-23.5 5.8zm37.9-14.7c-1.9-11.9 2.8-24.3 13.5-29.3 2.5 8.6-5.2 23.2-13.5 29.3zm18.2-6.2c-5.8-9.8 4-22.6 11.1-28.8 3.3 6-2.5 23.7-11.1 28.8zm16.9-7.6c-6.2-8.4 1.1-23.2 8.8-29 3.1 8.2.1 23.2-8.8 29zm16.9-10.6c-5.6-8-1.7-20.4 6.3-28.4 5.8 6.6.9 21-6.3 28.4zm13.5-10.7c-4.7-7.5 1.1-25.4 8.6-30.4 3.3 6.6.8 25.4-8.6 30.4zm10.8-2.8c-1.4-10.8 17.4-22.7 25.2-22.4-.9 8.9-8.9 18.6-25.2 22.4zm-10.5 12.2c8.8-9.1 26-9.1 32.1-7.2-1.7 5.3-21.9 16.9-32.1 7.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M328.7 276.8c12.4-3.3 20.5-6.1 27.9 1.7-5.2 6.6-25.4 4.7-27.9-1.7zm-17.7 8c11.9-6.4 26.3 3 28.5 8.6-13.3 5.5-28.7-7.2-28.5-8.6zm-16.3 9.2c10.8-4.1 23.2 1.4 28.2 7.5-5.8 2.7-21 5.7-28.2-7.5zm-14.9 4.7c12.4-1.4 24.4 8 27 13.4-15.9 1.5-22-3.2-27-13.4zm-4 9.4c-6.9-5-13-6.6-22.4-8.3-9.4-1.7-19.4-4.4-24.6-5.8-5.3-1.4 17.7 6.6 23.5 8.3 5.8 1.6 23.5 5.8 23.5 5.8zm-37.9-14.7c1.9-11.9-2.8-24.3-13.5-29.3-2.5 8.6 5.2 23.2 13.5 29.3zm-18.2-6.2c5.8-9.8-4-22.6-11.1-28.8-3.3 6 2.5 23.7 11.1 28.8zm-16.9-7.6c6.2-8.4-1.1-23.2-8.8-29-3.1 8.2-.1 23.2 8.8 29zM185.9 269c5.6-8 1.7-20.4-6.3-28.4-5.8 6.6-.9 21 6.3 28.4zm-13.5-10.7c4.7-7.5-1.1-25.4-8.6-30.4-3.3 6.6-.8 25.4 8.6 30.4zm-10.8-2.8c1.4-10.8-17.4-22.7-25.2-22.4.9 8.9 8.9 18.6 25.2 22.4zm10.5 12.2c-8.8-9.1-26-9.1-32.1-7.2 1.7 5.3 21.9 16.9 32.1 7.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M184.3 276.8c-12.4-3.3-20.5-6.1-27.9 1.7 5.2 6.6 25.4 4.7 27.9-1.7zm17.7 8c-11.9-6.4-26.3 3-28.5 8.6 13.3 5.5 28.7-7.2 28.5-8.6zm16.3 9.2c-10.8-4.1-23.2 1.4-28.2 7.5 5.8 2.7 21 5.7 28.2-7.5zm14.9 4.7c-12.4-1.4-24.4 8-27 13.4 15.9 1.5 22-3.2 27-13.4z"
  })));
}, ta = function(e) {
  var t = e.title, r = s(e, H7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#11457e",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#d7141a",
    d: "M513 171v171H0l215-171z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 0v171H215.185L0 0z"
  }));
}, aa = function(e) {
  var t = e.title, r = s(e, b7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 228h513v114H0z"
  }));
}, na = function(e) {
  var t = e.title, r = s(e, C7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#12ad2b",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6ab2e7",
    d: "M513 0v166.7L0 170.8V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 170.7 0 342V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#d7141a",
    d: "m89.8 92.5 17 52.4H162l-44.6 32.5 17 52.4-44.6-32.4-44.6 32.4 17-52.4-44.6-32.5h55.2z"
  }));
}, ra = function(e) {
  var t = e.title, r = s(e, _7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#c60c30",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M190 0h-60v140H0v60h130v142h60V200h323v-60H190z"
  }));
}, la = function(e) {
  var t = e.title, r = s(e, N7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 110.7v120h513v-120z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 110.7h513v40H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 190.7h513v40H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M196 0h120v342H196z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M196 0h40v342h-40z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M274.7 0h40v342h-40z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#D80027",
    cx: 256,
    cy: 170.7,
    r: 123.1
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m256 58.6 4.6 14.2h15l-12.1 8.9 4.6 14.2-12.1-8.8-12.1 8.8 4.6-14.2-12.1-8.9h15zM190.1 80l12.2 8.8 12.1-8.8-4.6 14.3 12.1 8.8h-15l-4.6 14.2-4.7-14.2h-15l12.1-8.8zm-40.7 56h15l4.6-14.2 4.7 14.2h15l-12.2 8.8 4.7 14.3-12.2-8.8-12.1 8.8 4.6-14.3zm0 69.3 12.1-8.8-4.6-14.3L169 191l12.2-8.8-4.7 14.3 12.2 8.8h-15l-4.7 14.3-4.6-14.3zm40.7 56.1 4.6-14.3-12.1-8.8h15l4.7-14.3 4.6 14.3h15l-12.1 8.8 4.6 14.3-12.1-8.9zm65.9 21.4-4.6-14.3h-15l12.1-8.8-4.6-14.3 12.1 8.8 12.1-8.8-4.6 14.3 12.1 8.8h-15zm65.9-21.4-12.2-8.9-12.1 8.9 4.6-14.3-12.1-8.8h15l4.6-14.3 4.7 14.3h15l-12.1 8.8zm40.7-56.1h-15l-4.6 14.3-4.7-14.3h-15l12.2-8.8-4.7-14.3L343 191l12.1-8.8-4.6 14.3zm0-69.3-12.1 8.8 4.6 14.3-12.1-8.8-12.2 8.8 4.7-14.3-12.2-8.8h15l4.7-14.2 4.6 14.2zm-40.7-56-4.6 14.3 12.1 8.8h-15l-4.7 14.2-4.6-14.2h-15l12.1-8.8-4.6-14.3 12.1 8.8zM279.3 168.7c-11-21.1-14.5-25.1-14.5-25.1s.4-9.7.4-15.6c0-8.8-7.4-15.8-16.5-15.8-8.6 0-15.7 2.9-16.5 11-4.2.9-8.6 4.1-8.6 10.7 0 4.8 1 7.3 5.2 9.3 2.1-4.6 4.3-4.8 9.3-6.4.8.6 1.7 3 2.6 3.4l.3 1s-13.3 6.6-13.3 30.9c0 29.5 22 45.4 22 45.4l-1.8.3-1.9 7.1h22v-7.2l11 17.5c.3-.3 10.2-47.6.3-66.5z",
    fill: "#496E2D"
  }));
}, ia = function(e) {
  var t = e.title, r = s(e, A7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 215.2h211.5v126.1H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h211.5v126.2H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M300.5 0H512v126.2H300.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M300.5 215.2H512v126.1H300.5z"
  }), /* @__PURE__ */ a.createElement("g", {
    stroke: "#FFF",
    strokeWidth: 5,
    strokeMiterlimit: 10
  }, /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M256 130h-49.9v49.4s19.5 6 49.9 6V130z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M206.1 179.4v6c0 27.5 22.3 49.9 49.9 49.9v-49.9c-30.4 0-49.9-6-49.9-6z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M256 235.3c27.5 0 49.9-22.3 49.9-49.9v-6s-19.5 6-49.9 6v49.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256 130v55.4c30.4 0 49.9-6 49.9-6V130H256z"
  })));
}, da = function(e) {
  var t = e.title, r = s(e, D7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#41662E",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256.5 0H513v342H256.5z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m341.5 105.3-29.4 40.4-47.5-15.4 29.4 40.4-29.4 40.4 47.5-15.4 29.4 40.4v-50l47.5-15.5-47.5-15.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M309.9 276.7c-58.5 0-106-47.5-106-106s47.5-106 106-106c18.3 0 35.4 4.6 50.4 12.7-23.5-23-55.7-37.2-91.2-37.2-72 0-130.4 58.4-130.4 130.4S197.1 301 269.1 301c35.5 0 67.7-14.2 91.2-37.2-14.9 8.2-32.1 12.9-50.4 12.9z"
  })));
}, ca = function(e) {
  var t = e.title, r = s(e, P7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 170.7h513V256H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 256h513v85.3H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFDA44",
    cx: 256,
    cy: 171,
    r: 60
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#4C1F00",
    d: "M369.2 79.9s-27.2-13.8-33.9-16c-6.7-2.2-49.1-13.2-49.1-7 0 10.3-13.5 12-15.5 12s-2-5.3-14.8-5.3-13.7 4.8-15.8 4.8c-2.2 0-14.5-1-14.5-11.5 0-5.2-42.9 4-49.1 7-6.1 3.1-33.9 16-33.9 16s45.8 2.7 53.9 6.2 43.8 16.5 43.8 16.5l-2.8 13.3h37.8l-3.8-13.3s35.1-12.7 43.8-16.5 53.9-6.2 53.9-6.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#57BA17",
    d: "M217.7 171.7c0 21.1 17.2 38.3 38.3 38.3 21.1 0 38.3-17.2 38.3-38.3v-11.5h-76.5v11.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M256 110.5c-21.1 0-38.3 17.2-38.3 38.3v11.5h76.5v-11.5c.1-21.1-17.1-38.3-38.2-38.3z"
  }));
}, sa = function(e) {
  var t = e.title, r = s(e, S7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#111",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#368FD8",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 228h513v114H0z"
  }));
}, oa = function(e) {
  var t = e.title, r = s(e, T7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#C09300",
    d: "M220.3 204.4s0-58.4 4.5-64.7c3.1-4.3 16.8 5.2 22.7 4.5 0 0 4.2-7.5 4.5-12 .3-4.6-1.1-7.6-4.9-6.2 0 0-1.2-2.1.5-3.3 1.6-1.2 5.6.1 5.6.1s-.5-1 1.6-.9c2.9.2 7.2 1.4 7.4 5.6.2 3.1.3 7.7.4 8.7.7 6.8 2.7 8.7 2.7 8.7s18.4-9.2 22-5.2c3.3 3.8 4.5 64.7 4.5 64.7l-18.1-16.8 12.1 29.5s-14.4 2.4-28.9 2.4c-14.5 0-31.1-4.2-31.1-4.2l13.8-28.2-19.3 17.3z"
  }));
}, ha = function(e) {
  var t = e.title, r = s(e, B7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#428823",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M256 171 0 342V0zm53.1 0c0-22.9 13.1-42.1 34.6-46.8-3.3-.7-6.7-1.1-10.3-1.1-26.4 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9c3.5 0 7-.4 10.3-1.1-21.5-5.1-34.6-24.2-34.6-46.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m365 129.2 10.3 31.7h33.3l-27 19.6 10.3 31.7-26.9-19.6-27 19.6 10.3-31.7-27-19.6h33.4z"
  })));
}, ua = function(e) {
  var t = e.title, r = s(e, L7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#56AF35",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "m0 342 513-171L0 0v342z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#ffc945"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M134.7 231.5c33.6 0 60.8-27.2 60.8-60.8s-27.2-60.8-60.8-60.8-60.8 27.2-60.8 60.8 27.2 60.8 60.8 60.8zm0 24.3c-47 0-85.2-38.1-85.2-85.2s38.1-85.2 85.2-85.2 85.2 38.1 85.2 85.2-38.2 85.2-85.2 85.2z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 119.5,
    cy: 148.3,
    r: 17.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 148.9,
    cy: 158.5,
    r: 17.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 134.7,
    cy: 135.2,
    r: 17.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 119.5,
    cy: 172.7,
    r: 17.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 149.9,
    cy: 182.8,
    r: 17.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 122.5,
    cy: 198,
    r: 17.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 145.9,
    cy: 205.2,
    r: 17.5
  })));
}, ma = function(e) {
  var t = e.title, r = s(e, I7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h22.5v15H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D03433",
    d: "M0 0h22.5v4H0V0zm0 11h22.5v4H0v-4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FBCA46",
    d: "M0 4h22.5v7H0V4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M7.8 7h1v.5h-1V7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A41517",
    d: "M7.2 8.5c0 .3.3.5.6.5s.6-.2.6-.5L8.5 7H7.1l.1 1.5zM6.6 7c0-.3.2-.5.4-.5h1.5c.3 0 .5.2.5.4V7l-.1 1.5c-.1.6-.5 1-1.1 1-.6 0-1-.4-1.1-1L6.6 7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A41517",
    d: "M6.8 7.5h2V8h-.5l-.5 1-.5-1h-.5v-.5zM5.3 6h1v3.5h-1V6zm4 0h1v3.5h-1V6zm-2.5-.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v.2c0 .2-.1.3-.3.3H7c-.1 0-.2-.1-.2-.2v-.3z"
  }));
}, fa = function(e) {
  var t = e.title, r = s(e, O7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#20AA46",
    d: "M0 0h22.5v5H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E92F3B",
    d: "M0 10h22.5v5H0v-5z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FADF50",
    d: "M0 5h22.5v5H0V5z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#205CCA",
    cx: 11.3,
    cy: 7.5,
    r: 5.2
  }), /* @__PURE__ */ a.createElement("g", {
    stroke: "#FFDB3D",
    fill: "none"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m11.3 8.8-2.1 1.5.8-2.4-2-1.5h2.5l.8-2.3.8 2.3h2.6l-2.1 1.5.8 2.4-2.1-1.5zm-1-2.4h1.9M9.9 7.8l1.3 1m.8-2.6.7 1.8M10 7.9l.6-1.8M11 9l1.6-1.1",
    strokeWidth: 0.5
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m8.7 3.9 1.1 1.6m4-1.7-1 1.6m-1.5 4.7V12M8.9 8.3 7.1 9m8.4 0-1.8-.7",
    strokeWidth: 0.25
  })));
}, va = function(e) {
  var t = e.title, r = s(e, R7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 810 540"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#039",
    d: "M0 0h810v540H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FC0",
    d: "m404.951 59.865 6.735 20.718h21.894l-17.633 12.812 6.638 20.74-17.634-12.812-17.634 12.812 6.736-20.729-17.633-12.812h21.796zm-90 24 6.735 20.718h21.894l-17.633 12.812 6.638 20.74-17.634-12.812-17.634 12.812 6.736-20.729-17.633-12.812h21.796zm-66 66 6.735 20.718h21.894l-17.633 12.812 6.638 20.74-17.634-12.812-17.634 12.812 6.736-20.729-17.633-12.812h21.796zm-24 89.999 6.735 20.719h21.894l-17.633 12.813 6.638 20.74-17.634-12.813-17.634 12.813 6.736-20.731-17.633-12.811h21.796zm24 90.001 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm66 66 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm180-312 6.735 20.718h21.894l-17.633 12.812 6.637 20.74-17.633-12.812-17.635 12.812 6.737-20.729-17.633-12.812h21.795zm66 66 6.735 20.718h21.894l-17.633 12.812 6.637 20.74-17.633-12.812-17.635 12.812 6.737-20.729-17.633-12.812h21.795zm24 90 6.735 20.718h21.894l-17.633 12.813 6.638 20.74-17.634-12.813-17.634 12.813 6.736-20.731-17.633-12.811h21.796zm-24 90 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm-156 90 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm90-24.001 6.735 20.719h21.894l-17.633 12.812 6.639 20.74-17.635-12.812-17.633 12.812 6.735-20.73-17.633-12.811h21.797z"
  }));
}, pa = function(e) {
  var t = e.title, r = s(e, k7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M513 129.3V212H203.7v130H121V212H0v-82.7h121V0h82.7v129.3z"
  }));
}, ga = function(e) {
  var t = e.title, r = s(e, V7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v22.6l-46.1 30.7H256v64h-46.1L256 148v22.7h-22.6l-73.4-49v49H96v-49l-73.4 49H0V148l46.1-30.7H0v-64h46.1L0 22.6V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176zM0 170.7v-15.1l57.4-38.3H80zm256 0v-15.1l-57.4-38.3H176z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#F3F3F3",
    d: "M307.1 127.1v92c0 61.6 80.5 80.5 80.5 80.5s80.4-19 80.4-80.6v-92l-80.5-23-80.4 23.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M468 132.8V98.3H307.1v34.5h69v69h-69v23h69V296c6.9 2.5 11.5 3.5 11.5 3.5s4.6-1.1 11.5-3.5v-71.2h69v-23h-69v-69H468z"
  }));
}, $a = function(e) {
  var t = e.title, r = s(e, G7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M155.8 115 256 170.7v-15.8L184.2 115zm-84 0L0 154.9v15.8L100.2 115z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M100.2 55.6 0 0v15.7l71.8 39.9zm84 0L256 15.7V0L155.8 55.6z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1F8BDE",
    d: "M312.2 194.2v-90c0-8.5 6.5-15.3 15-15.3h120.5c8.3 0 15 6.8 15 15.3v90c0 75.2-75.2 105.3-75.2 105.3s-75.3-30.1-75.3-105.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M312.2 194.2v-90c0-8.5 6.5-15.3 15-15.3h120.5c8.3 0 15 6.8 15 15.3v90c0 75.2-75.2 105.3-75.2 105.3s-75.3-30.1-75.3-105.3zm79.6 86.3c7.9-4.5 15.9-10 23.2-16.7 20.5-18.5 32.6-41.4 32.6-69.7v-90c0-.3-120.4-.3-120.4-.3v90.3c0 28.3 12.1 51.2 32.6 69.7 8.3 7.5 17.6 13.9 27.6 19 1.4-.6 2.8-1.4 4.4-2.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#187536",
    d: "M347.1 193.4c-2.6-7.9 1.7-14.3 10.1-14.3h60.5c8.2 0 12.8 6.3 10.1 14.3l-5.5 16.5c-2.6 7.9-8.9 9.2-15.8 4 0 0 2.6-4.8-19.1-4.8-21.7 0-19.1 4.8-19.1 4.8-6.1 5.7-13.1 4-15.8-4 .1.1-5.4-16.5-5.4-16.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M357.4 179.1c8.1 1.6 17.8-15 30.1-15 13.1 0 21.8 17.1 30.1 15 7.4-1.8 15-22.2 15-30.1 0-16.6-20.2-30.1-45.1-30.1-24.9 0-45.1 13.5-45.1 30.1-.1 8.5 6.6 28.5 15 30.1zm-1.4 91.6c6.2.4 12.5-1.8 17.2-6.5l9-9c2.9-2.9 7.5-2.9 10.4 0l9 9c4.7 4.7 11 6.9 17.1 6.5 5.3-.3 32.5-33.5 25.7-32.6-4.6.6-9.1 2.8-12.7 6.3l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-8.7-8.8-22.9-8.8-31.7-.1l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-3.5-3.5-7.8-5.6-12.3-6.3-6.7-1.1 20.1 32.2 25.3 32.5zM322.1 210c2.9-2.9 7.5-2.9 10.4 0l9 9c8.8 8.7 22.9 8.7 31.7 0l9-9c2.9-2.9 7.5-2.9 10.4 0l9 9c8.8 8.7 22.9 8.7 31.7 0l9-9c2.9-2.9 7.5-2.9 10.4 0 0 0 5.5-14.8 2.5-15.9-7.9-2.9-17.2-1.2-23.5 5.2l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-8.7-8.8-22.9-8.8-31.7-.1l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-6.2-6.2-15.1-8-22.8-5.5-3.1 1.1 1.9 16.1 1.9 16.1z"
  }));
}, Ea = function(e) {
  var t = e.title, r = s(e, j7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m256 37.9 10.1 31.2H299l-26.6 19.3 10.2 31.2-26.6-19.3-26.6 19.3 10.2-31.2L213 69.1h32.9zM123.2 170.7l31.2-10.2v-32.8l19.3 26.6 31.2-10.2-19.3 26.6 19.3 26.5-31.2-10.1-19.3 26.5v-32.8zM256 303.5l-10.1-31.2H213l26.6-19.3-10.2-31.3L256 241l26.6-19.3-10.2 31.3 26.6 19.3h-32.9zm132.8-132.8-31.2 10.1v32.8l-19.3-26.5-31.2 10.1 19.3-26.5-19.3-26.6 31.2 10.2 19.3-26.6v32.8z",
    fill: "#FFF"
  }));
}, wa = function(e) {
  var t = e.title, r = s(e, U7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0F61A5",
    d: "M513 214.5H206.2V342h-87.8V214.5H0v-87.7h118.4V0h87.8v126.8H513V192z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E50E3D",
    d: "M513 149.3V192H183.7v150H141V192H0v-42.7h141V0h42.7v149.3z"
  }));
}, za = function(e) {
  var t = e.title, r = s(e, Z7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342z"
  }));
}, ya = function(e) {
  var t = e.title, r = s(e, W7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 228h513v114H0z"
  }));
}, xa = function(e) {
  var t = e.title, r = s(e, K7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v341.3H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M311.7 230 513 341.3v-31.5L369.3 230h-57.6zM200.3 111.3 0 0v31.5l143.7 79.8h56.6z"
  })), /* @__PURE__ */ a.createElement("path", {
    d: "M393.8 230 513 295.7V230H393.8zm-82.1 0L513 341.3v-31.5L369.3 230h-57.6zm146.9 111.3-147-81.7v81.7h147zM90.3 230 0 280.2V230h90.3zm110 14.2v97.2H25.5l174.8-97.2zm-82.1-132.9L0 45.6v65.7h118.2zm82.1 0L0 0v31.5l143.7 79.8h56.6zM53.4 0l147 81.7V0h-147zm368.3 111.3L513 61.1v50.2h-91.3zm-110-14.2V0h174.9L311.7 97.1z",
    fill: "#0052B4"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M288 0h-64v138.7H0v64h224v138.7h64V202.7h224v-64H288V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M311.7 230 513 341.3v-31.5L369.3 230h-57.6zm-168 0L0 309.9v31.5L200.3 230h-56.6zm56.6-118.7L0 0v31.5l143.7 79.8h56.6zm168 0L513 31.5V0L311.7 111.3h56.6z"
  })));
}, Ma = function(e) {
  var t = e.title, r = s(e, Y7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#c60a0a",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#3E8446",
    d: "m256.5 170.7-212 126.1V44.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m256.5 170.7 211 126.1h-423zm211-126.2-211 126.2-212-126.2z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#3E8446",
    d: "M467.5 44.5v252.3l-211-126.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m256.5 10.4 2.8 10.2H270l-8.6 6.3 3.3 10.2-8.2-6.3-9.2 6.3 3.3-10.2-8.6-6.3h10.7zm-86.4 0 3.3 10.2h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm171.8 0 3.3 10.2H356l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm-85.4 293.8 2.8 10.2H270l-8.6 6.3 3.3 10.2-8.2-6.3-9.2 6.3 3.3-10.2-8.6-6.3h10.7zm-86.4 0 3.3 10.2h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm171.8 0 3.3 10.2H356l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#c60a0a",
    cx: 244.5,
    cy: 170.7,
    r: 76.2
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m244.5 110.1 13.6 41.8h44l-35.6 25.8 13.6 41.8-35.6-25.8-35.5 25.8 13.6-41.8-35.6-25.8h44zm-136.8 57.7c4.4 6.9 2.3 16.1-4.6 20.5s-16.1 2.3-20.5-4.6c-7.9-12.5-3.3-33-3.3-33s20.4 4.6 28.4 17.1z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#A2001D",
    cx: 99.1,
    cy: 182.1,
    r: 7.4
  }));
}, Fa = function(e) {
  var t = e.title, r = s(e, J7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M.8 0h21v15H.8V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#eb000e",
    d: "M9.8 6H0v3h9.8v6h3V9h9.8V6h-9.8V0h-3v6z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#eb000e",
    d: "m17.3 2.7-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm-12.7 0-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm0 9-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm12.7 0-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2z"
  }));
}, Ha = function(e) {
  var t = e.title, r = s(e, X7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 90 60"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FDEB01",
    d: "m0 0 90 60H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#58A846",
    d: "M90 0v60L0 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ED3D24",
    d: "m50.7 33.3 9.3-6.7H48.5L45 15.7l-3.5 10.9H30l9.3 6.7-3.6 11 9.3-6.7 9.3 6.7z"
  }));
}, ba = function(e) {
  var t = e.title, r = s(e, Q7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M308 0H204v118.7H0v104h204V342h104V222.7h205v-104H308z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m368.6 188 26 17.3V136l-26 17.3h-95.3V58.1l17.3-26h-69.2l17.3 26v95.2h-95.3l-26-17.3v69.3l26-17.3h95.3v95.2l-17.3 26h69.2l-17.3-26V188z"
  }));
}, Ca = function(e) {
  var t = e.title, r = s(e, q7);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m255.9 113.8 14.1 43.4 40.4 3.2-37 26.9 19.5 40.3-37-26.9-37 26.9 14.1-43.5-36.9-26.9h45.7z"
  }));
}, _a = function(e) {
  var t = e.title, r = s(e, e8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 230h513v112H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    stroke: "#000",
    strokeMiterlimit: 10,
    d: "M363.1 131.8V99.1H374V77.3h-21.9v10.9h-21.8V77.3h-21.8v21.8h10.9v32.7h-21.8V55.5h10.9V33.7h-21.8v10.9h-10.9V33.7H254v10.9h-10.9V33.7h-21.8v21.8h10.9v76.3h-21.8V99.1h10.9V77.3h-21.8v10.9h-21.8V77.3h-21.8v21.8h10.9v32.7H145V219h239.9v-87.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    stroke: "#000",
    strokeMiterlimit: 10,
    d: "m264.9 235.5-24.2 18.2 19.1 14.3v31.3h-23.2v9h23v7.9h-23v9.3H270V268l19.1-14.3-24.2-18.2zm0 25.3-10.1-7.1 10.1-7.1 10.1 7.1-10.1 7.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M239.6 209.7v-27.9s.1-22.3 25-22.3c24.8 0 25.7 22 25.7 22v28.2h-50.7zm-69.1 0v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M169.1 209.7v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8zm151.8 0v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8zm8.4-77.7v-15.7s.1-12.1 11.3-12.1c11.3 0 11.7 11.9 11.7 11.9V132h-23zm-78.8 0v-23.7s.1-18.3 14.3-18.3c14.2 0 14.7 18 14.7 18v24h-29zm-73 0v-15.7s.1-12.1 11.3-12.1 11.7 11.9 11.7 11.9V132h-23z"
  }));
}, Na = function(e) {
  var t = e.title, r = s(e, t8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 0v171H0V0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 185.8,
    cy: 171.2,
    r: 117.8
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M68 171c0-65.1 52.8-117.8 117.8-117.8 65.1 0 117.8 52.8 117.8 117.8"
  }));
}, Aa = function(e) {
  var t = e.title, r = s(e, a8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#cf0d19",
    d: "M0 0h513v100H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 121h513v100H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1a7e25",
    d: "M0 242h513v100H0z"
  }));
}, Da = function(e) {
  var t = e.title, r = s(e, n8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M342 0h171v342H342z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h171v342H0z"
  }));
}, Pa = function(e) {
  var t = e.title, r = s(e, r8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342z"
  }));
}, Sa = function(e) {
  var t = e.title, r = s(e, l8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v113.8H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 227.6h513V342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0070C8",
    d: "M126 171 0 342V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    d: "M233.8 139.4v40.4c0 35.6 35.6 35.6 35.6 35.6s35.6 0 35.6-35.6v-40.4h-71.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#786145",
    d: "M264.5 179.8h9.8l4 25.8h-17.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M287.2 162c0-9.8-8-14.8-17.8-14.8s-17.8 5-17.8 14.8c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9h35.6c4.9 0 8.9-4 8.9-8.9s-4-8.9-8.9-8.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m230.7 120 1.9 3.3h3.8l-1.9 3.3 1.9 3.2h-3.8l-1.9 3.3-1.9-3.3H225l1.9-3.2-1.9-3.3h3.8zm15.3 0 1.9 3.3h3.7l-1.9 3.3 1.9 3.2h-3.7l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8zm15.3 0 1.9 3.3h3.7l-1.9 3.3 1.9 3.2h-3.7l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8zm15.8 0 1.9 3.3h3.8l-1.9 3.3 1.9 3.2H279l-1.9 3.3-1.9-3.3h-3.7l1.8-3.2-1.8-3.3h3.7zm16 0 1.9 3.3h3.8l-1.9 3.3 1.9 3.2H295l-1.9 3.3-1.9-3.3h-3.7l1.8-3.2-1.8-3.3h3.7zm15 0 1.9 3.3h3.7l-1.9 3.3 1.9 3.2H310l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8z",
    fill: "#FFDA00",
    stroke: "#000",
    strokeMiterlimit: 10
  }));
}, Ta = function(e) {
  var t = e.title, r = s(e, i8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#0d5eaf"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h190v190H0z"
  })), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M0 76h190v38H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M76 0h38v190H76z"
  })));
}, Ba = function(e) {
  var t = e.title, r = s(e, d8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6-77.8-53.3h22.6l62.5 42.3v11z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#FFF",
    cx: 443.4,
    cy: 233.6,
    rx: 29,
    ry: 43.5
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#FFCE00",
    cx: 406.9,
    cy: 317.7,
    rx: 22,
    ry: 9.3
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#FFCE00",
    cx: 364,
    cy: 317.7,
    rx: 22,
    ry: 9.3
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#39B200",
    d: "m342 190.1 43.4 86.9 43.5-86.9z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#9B9B9B",
    cx: 327.5,
    cy: 233.6,
    rx: 29,
    ry: 43.5
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#757575",
    d: "m371 175.6-14.5 14.5h57.9l-14.5-14.5 14.5-43.5s-13-29-29-29-29 29-29 29l14.6 43.5z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#C6B56F",
    cx: 385.4,
    cy: 67,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#A54A00",
    cx: 386,
    cy: 88.7,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 443.4,
    cy: 117.7,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#0049FF",
    cx: 342.2,
    cy: 146.7,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#0041F9",
    cx: 429.8,
    cy: 146.7,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#F7D71E",
    cx: 386,
    cy: 233.6,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#CEC851",
    cx: 457.9,
    cy: 190.1,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 385.4,
    cy: 289.5,
    r: 29
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#7C0B29",
    d: "m371 135.7 14.5-3.5 14.5 3.5c0 7.5-14.5 11-14.5 11s-14.5-3.5-14.5-11z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 327.5,
    cy: 117.4,
    r: 29
  }));
}, La = function(e) {
  var t = e.title, r = s(e, c8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h171v342H0zm342 0h171v342H342z",
    fill: "#338AF3"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#DCC26D",
    cx: 256,
    cy: 155.8,
    r: 25.5
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#628A40",
    d: "M194.2 155.9c0 22.1 11.8 42.5 30.8 53.5 5.9 3.4 13.5 1.4 16.9-4.5 3.4-5.9 1.4-13.5-4.5-16.9-11.5-6.6-18.5-18.9-18.5-32.1 0-6.8-5.5-12.4-12.4-12.4s-12.3 5.5-12.3 12.4zm95.1 52.1c17.8-11.4 28.6-31 28.5-52.1 0-6.8-5.5-12.4-12.4-12.4-6.8 0-12.4 5.5-12.4 12.4 0 12.7-6.5 24.5-17.1 31.3-5.8 3.6-7.7 11.2-4.1 17 3.6 5.8 11.2 7.7 17 4.1.2-.1.3-.2.5-.3z"
  }));
}, Ia = function(e) {
  var t = e.title, r = s(e, s8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M11.1 11.1h489.7v319.1H11.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#7DBEF1",
    d: "M256 285.3s76.4-51.3 76.4-114.6S256 56 256 56s-76.4 51.3-76.4 114.6S256 285.3 256 285.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1C8AE6",
    d: "M179.8 180.7h152.6l-29.3 64.9h-95.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF042",
    d: "M192.3 205.9s40.5 38.2 51 38.2c12.4 0 12.6-18.4 25.5-25.5 20.2-11.1 51-12.7 51-12.7L297 248.7l-41 36.6-46.8-39.7-16.9-39.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#259C7B",
    d: "m256 157.5-22.5 15.6 7.9-26.2-21.8-16.5 27.4-.5 9-25.9 9 25.9 27.4.5-21.8 16.6 7.9 26.2-22.5-15.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#8E5715",
    d: "M249.7 144.6c-.9 9.2-1.5 18.4-1.7 27.6-.3 11.9.3 20.7 2 26 2.2 6.6 7.2 12.9 14.2 18.9 5.3 4.6 10.6 8.1 14.2 10.1 3.1 1.7 7 .6 8.7-2.4 1.7-3.1.6-7-2.4-8.7-4.3-2.5-8.4-5.4-12.2-8.7-5.4-4.6-9.1-9.2-10.4-13.3-1.1-3.4-1.6-11.3-1.4-21.7.2-8.9.8-17.8 1.7-26.6.4-3.5-2.2-6.6-5.7-7-3.6-.3-6.7 2.3-7 5.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m217.8 170.7 25.5 38.2h-25.5v-38.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "none",
    stroke: "#D80027",
    strokeWidth: 12,
    strokeMiterlimit: 10,
    d: "M256 285.3s76.4-51.3 76.4-114.6S256 56 256 56s-76.4 51.3-76.4 114.6S256 285.3 256 285.3z"
  }));
}, Oa = function(e) {
  var t = e.title, r = s(e, o8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h512v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h182v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m98.3 109.8 15.1 46.5h48.9L122.8 185l15.1 46.5-39.6-28.7-39.5 28.7L73.9 185l-39.6-28.7h48.9z"
  }));
}, Ra = function(e) {
  var t = e.title, r = s(e, h8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#009E49",
    d: "M0 0h900v600H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m0 0 947 300L0 600V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFD00D",
    d: "M0 26.1 870 300 0 573.9V26.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2D2D2D",
    d: "m0 0 450 300L0 600V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D3132F",
    d: "m0 35 397.5 265L0 565V35z"
  }));
}, ka = function(e) {
  var t = e.title, r = s(e, u8);
  return /* @__PURE__ */ a.createElement("svg", c({
    viewBox: "0 0.5 21 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h21v15H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ee1c25",
    d: "M0 0h21v15H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M12 7.19c-.798-.5-1 .409-1 0 0-.828.895-1.5 2-1.5s2 .672 2 1.5c-.949 0-1.044.5-1.5.5-.56 0-.702 0-1.5-.5zM13.25 7a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5zm-1.81 1.962c.228-.913-.698-.824-.31-.95.788-.257 1.703.387 2.045 1.438.341 1.05-.021 2.11-.809 2.366-.293-.903-.798-.838-.939-1.272-.173-.533-.217-.668.012-1.582zm.566 1.13a.25.25 0 1 0 .476-.154.25.25 0 0 0-.476.154zM9.58 8.977c.94-.065.57-.919.81-.588.486.67.157 1.74-.737 2.389-.894.65-2.013.632-2.5-.038.768-.558.55-1.018.92-1.286.453-.33.568-.413 1.507-.477zm-.899.888a.25.25 0 1 0 .294.405.25.25 0 0 0-.294-.405zm.312-2.652c.351.874 1.049.258.809.588-.487.67-1.606.687-2.5.038-.894-.65-1.223-1.719-.736-2.39.767.559 1.138.21 1.507.478.453.33.568.413.92 1.286zm-1.124-.58a.25.25 0 1 0-.293.404.25.25 0 0 0 .293-.404zm2.619-.524c-.722.605.08 1.078-.309.951-.788-.256-1.15-1.315-.809-2.365.342-1.05 1.257-1.695 2.045-1.439-.293.903.153 1.147.012 1.581-.173.533-.217.668-.939 1.272zm.205-1.247a.25.25 0 1 0-.475-.155.25.25 0 0 0 .475.155z",
    fill: "#FFF"
  })));
}, Va = function(e) {
  var t = e.title, r = s(e, m8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M223.4 170.7c.3-.3.5-.6.8-.9-.3.3-.5.6-.8.9zm-34.2 41.9 11 22.9 24.7-5.7-11.1 22.8 19.9 15.8L209 274v25.4l-19.8-15.9-19.8 15.9.1-25.4-24.8-5.6 19.9-15.8-11.1-22.8 24.8 5.7zm197.9 28.5 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6v12.2l-9.4-7.6-9.5 7.6.1-12.2-11.9-2.6 9.5-7.5-5.3-10.9 11.9 2.7zm-48.6-116 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6v-12.1l-11.8-2.7 9.5-7.5-5.3-10.9 11.8 2.7zm48.6-66.2 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.9-2.7 9.5-7.5-5.3-10.9 11.9 2.7zm42.4 49.7 5.3 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6V150l-9.5-7.6-9.4 7.6v-12.2l-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zm-30.3 57.9 4.1 12.7h13.3l-10.8 7.8 4.1 12.6-10.7-7.8-10.8 7.8 4.1-12.6-10.7-7.8h13.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M155.8 115 256 170.7v-15.8L184.2 115zm-84 0L0 154.9v15.8L100.2 115z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M100.2 55.6 0 0v15.7l71.8 39.9zm84 0L256 15.7V0L155.8 55.6z",
    fill: "#D80027"
  }));
}, Ga = function(e) {
  var t = e.title, r = s(e, f8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v114H0zm0 228h513v114H0zm203.5-110.1 6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zm105 0 6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zM256 147.6l6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zm-52.5 29.7 6.7 16.6 17.6 1-14 10.9 4.7 17.6-15-9.9-15 9.9 4.7-17.6-14-10.9 17.6-1zm105 0 6.7 16.6 17.6 1-14 10.9 4.7 17.6-15-9.9-15 9.9 4.7-17.6-14-10.9 17.6-1z",
    fill: "#338AF3"
  }));
}, ja = function(e) {
  var t = e.title, r = s(e, v8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M309.3 113.2v-44l17.5-14.4 17.7 14.4v44zm-105.6 0v-44l-17.3-14.4-17.9 14.4v44zm35.2 0v-44l17.6-14.4 17.6 14.4v44z",
    fill: "#338AF3"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M309.3 113.2h-35.2v-44l17.5-14.4 17.7 14.4zm-70.4 0h-35.2v-44l17.5-14.4 17.7 14.4z",
    fill: "#0052B4"
  }), /* @__PURE__ */ a.createElement("path", {
    stroke: "#D80027",
    fill: "#FFF",
    d: "M168.5 113.2v101.9c0 24.3 14.4 46.2 35.4 59.4 21.3 13.4 42.1 14.7 52.6 14.7s31.4-1.7 52.6-14.8c21-13 35.4-35.1 35.4-59.3V113.2h-176z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M168.5 113.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-105.6 35.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-105.6 35.2h35.2v35.2h-35.2zm35.2 35.2h35.2V254h-35.2zm35.2-35.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-35.2 35.2h35.2V254h-35.2zm35.2 55.5c8.6-5.4 16.2-12.3 22-20.3h-22v20.3zM181.7 254c5.8 8 13.3 14.9 22 20.4V254h-22zm57.2 0v33.7c7.2 1.2 13.3 1.5 17.6 1.5 4.3 0 10.4-.3 17.6-1.6V254h-35.2z",
    fill: "#D80027"
  }));
}, Ua = function(e) {
  var t = e.title, r = s(e, p8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M0 0h513v172H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 172h513v172H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m381.4 251.5-110.7-13.8-110.8 13.8V85.4h221.5z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#0052B4",
    cx: 270.7,
    cy: 182.3,
    r: 55.4
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#A2001D",
    cx: 270.7,
    cy: 182.3,
    r: 27.7
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M229.1 113.1h83.1l-41.5 41.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M256.8 140.8h27.7v83h-27.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M314.9 215.5h-88.5l-66.5 36h221.5z"
  }));
}, Za = function(e) {
  var t = e.title, r = s(e, g8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 228h513v114H0z"
  }));
}, Wa = function(e) {
  var t = e.title, r = s(e, $8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 300 200"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#fc0",
    d: "M0 0h300v200H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0768a9",
    d: "M0 0h200v200H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "M0 0h100v200H0z"
  }));
}, Ka = function(e) {
  var t = e.title, r = s(e, E8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E00",
    d: "M0 0h513v171H0z"
  }));
}, Ya = function(e) {
  var t = e.title, r = s(e, w8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M342 0h171v342H342z"
  }));
}, Ja = function(e) {
  var t = e.title, r = s(e, z8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M340.6 122.4h-56.1l-28-48.6-28 48.6h-56.1l28 48.6-28 48.6h56.1l28 48.6 28-48.6h56.1l-28-48.6 28-48.6zM293.2 171 276 204.2h-38.9L219.8 171l17.2-33.2h38.9l17.3 33.2zm-36.7-71.8 11.9 23.3h-23.9l12-23.3zm-58.3 38.6h23.9l-10.8 21-13.1-21zm0 66.4 13-22.1 11.9 22.1h-24.9zm58.3 37.5-11.9-22.1h23.9l-12 22.1zm59.4-37.5h-25l11.9-22.1 13.1 22.1zm-26.1-66.4h26.1l-13 22.1-13.1-22.1zM0 21.3h512V64H0zm0 256h512V320H0z",
    fill: "#2E52B2"
  }));
}, Xa = function(e) {
  var t = e.title, r = s(e, y8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#E52D42",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M393.3 68.2h-45.8l-33.8 80.2-34.4-22.9s-24.7-59.1-34.4-68.2c-9.7-9.7-18.7-.6-48.9 7.8-29.6 8.4-30.8 18.7-42.2 18.7-4.8 0-19.9-17.5-27.7-22.3-12.1-7.8-16.9-4.2-13.9 7.2 1.2 4.8 10.9 10.9 16.9 19.9 7.8 11.5 12.7 25.9 12.7 25.9s10.9-10.3 16.9-12.1c9-2.4 19.3 1.8 31.4 0 15.1-2.4 31.4-10.9 31.4-10.9l4.2 43.4s-54.3 50.7-49.5 70.6 56.1 44.6 68.2 62.7c12.1 17.5-7.2 24.1-7.2 32.6s-1.8 19.9 7.2 16.3c9-3.6 10.3-18.1 18.7-31.4 6-9 10.3-13.9 11.5-17.5 1.8-9-23.5-32-37.4-48.9-6.6-7.8-19.9-18.7-19.9-18.7l39.2-29.6s67.6 27.7 82.6 18.7c15.1-9 19.3-98.3 19.3-98.3l47-11.5-12.1-11.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#F8DD4E",
    d: "M279.3 262.4c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm45.8-182.8c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm0 91.1c-6 0-11.5-4.8-11.5-11.5 0-6 4.8-11.5 11.5-11.5 6 0 11.5 4.8 11.5 11.5-.6 6.7-5.5 11.5-11.5 11.5zm-136.9 45.8c-6 0-11.5-4.8-11.5-11.5 0-6 4.8-11.5 11.5-11.5 6.6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm45.2-136.9c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-4.8 11.5-11.5 11.5zm22.9 91.1c-6 0-11.5-10.3-11.5-22.9s4.8-22.9 11.5-22.9c6 0 11.5 10.3 11.5 22.9s-4.8 22.9-11.5 22.9zm-114-45.2c-6 0-11.5-4.8-11.5-11.5 0-6.6 4.8-11.5 11.5-11.5 6.6 0 11.5 4.8 11.5 11.5 0 6.6-4.8 11.5-11.5 11.5z"
  }));
}, Qa = function(e) {
  var t = e.title, r = s(e, x8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#181A93",
    d: "M17.3 0h478.4v342H17.3V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFA44A",
    d: "M0 0h513v114H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1A9F0B",
    d: "M0 228h513v114H0V228z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 114h513v114H0V114z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 256.5,
    cy: 171,
    r: 34.2
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#181A93",
    d: "M256.5 216.6c-25.1 0-45.6-20.5-45.6-45.6s20.5-45.6 45.6-45.6 45.6 20.5 45.6 45.6-20.5 45.6-45.6 45.6zm0-11.4c18.2 0 34.2-16 34.2-34.2s-15.9-34.2-34.2-34.2-34.2 16-34.2 34.2 16 34.2 34.2 34.2z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#181A93",
    cx: 256.5,
    cy: 171,
    r: 22.8
  }));
}, qa = function(e) {
  var t = e.title, r = s(e, M8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0-.3h513V342H0V-.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M462.9 198.1c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 10c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-10 20-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-10 21-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 21 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 20 10c11 6 22 12 32.1 12s20-6 31.1-12l19-10v-22c-10 0-20 6-30.1 12-7 4-16 9-20 9zM0 31.7l19 10c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-10 20-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-10 21-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 21 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 20 10c11 6 22 12 32.1 12s20-6 31.1-12l19-10v-22c-10 1-20 6-30.1 12-7 4-16 9-20 9s-14-5-21-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-11-30.1-12v22zm462.9 55.2c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 9c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12l19-9v-22c-10 0-20 6-30.1 12-7 3.9-16 9-20 9zm50.1 34c-10 1-20 6-30.1 12-7 4-16 10-20 10s-14-6-21-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-14-6-20-10c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-13-6-20-10c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 10-20 10s-13-6-20-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 10-21 10s-13-6-20-10c-10-6-20-11-30.1-12v23c4 1 13 5 19 9 11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12c6-4 15-8 19-9v-23zm-50.1 133.3c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 9c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12l19-9v-22c-10 0-20 6-30.1 12-7 4-16 9-20 9zm50.1 34c-10 1-20 6-30.1 12-7 4-16 10-20 10s-14-6-21-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-14-6-20-10c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-13-6-20-10c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 10-20 10s-13-6-20-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 10-21 10s-13-6-20-10c-10-6-20-11-30.1-12v23c4 0 13 5 19 9 11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12c6-4 15-9 19-9v-23z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0-.3h256v171H0V-.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M389.8 119.9H408v78.8h-18.3l.1-78.8zm0 117.8H408v75.1h-18.3l.1-75.1z",
    fill: "#A2001D"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144-.3h-32v70H0v32h112v69h32v-69h112v-32H144v-70z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0-.3v15l57 39h23L0-.3zm256 0v15l-57 39h-23l80-54z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0-.3v15l57 39h23L0-.3zm256 0v15l-57 39h-23l80-54zM0 170.7v-15l57-38h23l-80 53zm256 0v-15l-57-38h-23l80 53z"
  })), /* @__PURE__ */ a.createElement("g", {
    fill: "#2E52B2"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M0 22.7v31h46l-46-31zm96-23v49L23-.3h73zm160 23v31h-46l46-31zm-96-23v49l73-49h-73z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 22.7v31h46l-46-31zm96-23v49L23-.3h73zm160 23v31h-46l46-31zm-96-23v49l73-49h-73zM0 147.7v-30h46l-46 30zm96 23v-49l-73 49h73zm160-23v-30h-46l46 30zm-96 23v-49l73 49h-73z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#5DA51E",
    stroke: "#45602C",
    strokeWidth: 4,
    strokeMiterlimit: 10,
    d: "M462.8 91.5h-29.1l25.7-25.7c4.5-4.4 4.5-11.4 0-15.8l-3.4-3.4c-4.4-4.4-11.4-4.4-15.8 0l-25.9 25.9V37.4c0-6.2-5.1-11.3-11.3-11.3h-4.7c-6.2 0-11.3 5.1-11.3 11.3v31.7l-23.5-23.8c-4.7-4.7-12.2-4.7-16.9 0l-3.6 3.6c-4.7 4.7-4.7 12.4 0 17.2l25 25.4h-30.6c-6 0-10.9 4.9-10.9 10.9v4.6c0 6 4.9 10.9 10.9 10.9H369l-20.7 20.7c-4.4 4.4-4.4 11.4 0 15.8l3.4 3.4c4.4 4.4 11.4 4.4 15.8 0l19.6-19.6V167c0 6.1 5.1 11.1 11.3 11.3h4.7c6.2 0 11.3-5.1 11.3-11.3v-28.3l22.2 22.6c4.7 4.7 12.4 4.7 17.1 0l3.6-3.6c4.7-4.7 4.7-12.4 0-17.2L435.2 118h27.6c5.9 0 10.7-4.9 10.9-10.9v-4.6c0-6.1-4.9-11-10.9-11z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E2DD24",
    stroke: "#525625",
    strokeWidth: 4,
    strokeMiterlimit: 10,
    d: "M439.2 249.1h-79.8s-.9-13.4-6-21.8c-6.2-10.4-13.9-28.1-1.4-36.7 15.9-10.9 33.7.8 48.2.8 11.8.1 26.9-14 45-.8 12.2 8.9 3.9 28.2-1.3 36.7-7 11.5-4.7 21.8-4.7 21.8z"
  }));
}, e0 = function(e) {
  var t = e.title, r = s(e, F8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#CE1126",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M219.2 160.7h-29.3c1.5-5.7 6.6-9.9 12.8-9.9v-19.9c-18.3 0-33.1 14.9-33.1 33.1v16.5h49.6c1.8 0 3.3 1.5 3.3 3.3v6.6h-66.2v19.9h86.1v-26.5c0-12.7-10.4-23.1-23.2-23.1zm49.6 29.8v-59.6H249v79.5h33.1v-19.9zm66.2 0v-59.6h-19.8v59.6h-6.6v-19.8h-19.9v39.7h59.6v-19.9z",
    fill: "#547C31"
  }));
}, t0 = function(e) {
  var t = e.title, r = s(e, H8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 227.9h513v114H0zm278.8-93.1c.1 2 8.7 26.2 4.4 39.4-6.6 20.3-15.8 21.8-19.8 24.5V134l-6.9-4.2-6.9 4.2v64.7c-4-2.7-12.4-2.4-19.8-24.5-4.3-12.7 5.7-37.3 5.8-39.2 0 0-9.5 8.1-15.8 24-5.9 14.8 1.9 49.6 29.5 54.8 2.3.4 4.7 5.6 7.2 5.6 2.1 0 4.1-5.2 6-5.5 28.4-4.6 35-41.7 29.9-55.6-5.4-14.6-13.6-23.5-13.6-23.5z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M44.6 98.9h22.3v24.4H44.6zM0 98.9h22.3v24.4H0zm89.2 0h22.3v24.4H89.2zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4H223zm44.7 0H290v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0H513v24.4h-22.3zm-446.1 118h22.3v25.5H44.6zm-44.6 0h22.3v25.5H0zm89.2 0h22.3v25.5H89.2zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5H223zm44.7 0H290v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0H513v25.5h-22.3z",
    fill: "#FFF",
    opacity: 0.5
  }));
}, a0 = function(e) {
  var t = e.title, r = s(e, b8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 210.6H202.2v130.7h-79.8V210.6H0v-79.8h122.4V0h79.8v130.8H513v18.5l-1 42.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M513 149.3V192H183.7v149.3H141V192H0v-42.7h141V0h42.7v149.3z"
  }));
}, n0 = function(e) {
  var t = e.title, r = s(e, C8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M342 0H0v341.3h512V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342z"
  }));
}, r0 = function(e) {
  var t = e.title, r = s(e, _8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M301.8 171 513 30.2V0h-45.3L256.5 140.8 45.3 0H0v30.2L211.2 171 0 311.8V342h45.3l211.2-140.8L467.7 342H513v-30.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m233.7 44.6 22.3 5.6 22.3-5.6 4-20.9-14.9 6.5L256 14.8l-11.4 15.4-14.9-6.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M233.7 44.6s-4 12.9-4 29.9c0 27.9 26.3 41.3 26.3 41.3s26.3-15.5 26.3-41.3c0-15.4-4-29.9-4-29.9s-8.1-5-22.3-5-22.3 5-22.3 5z"
  }));
}, l0 = function(e) {
  var t = e.title, r = s(e, N8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M215.9 171 0 314.6V26.8zM513 26.8v287.8L296.1 171z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M513 26.8 296.1 171 513 314.6V342h-41.1L256 197.4 40.1 342H0v-27.4L215.9 171 0 26.8V0h40.1L256 143.9 471.9 0H513z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M513 26.8 296.1 171 513 314.6V342h-41.1L256 197.4 40.1 342H0v-27.4L215.9 171 0 26.8V0h40.1L256 143.9 471.9 0H513z"
  }));
}, i0 = function(e) {
  var t = e.title, r = s(e, A8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256.5 170.7 0 341.3V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m77.9 139.5 7.9 16.4 17.8-4.1-8 16.5 14.3 11.3-17.8 4 .1 18.3-14.3-11.5-14.2 11.5v-18.3l-17.8-4 14.3-11.3-7.9-16.5 17.7 4.1z"
  }));
}, d0 = function(e) {
  var t = e.title, r = s(e, D8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#D80027",
    cx: 256.5,
    cy: 171,
    r: 96
  }));
}, c0 = function(e) {
  var t = e.title, r = s(e, P8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h512v90.579H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 251h513v91H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m323.3 54.5-25.6-11.8L256 137l-41.7-94.3-25.6 11.8 51.8 116.2-51.8 116.2 25.6 11.8 41.7-94.4 41.7 94.4 25.6-11.8-51.8-116.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M273.4 65.6c-9.9-10.8-17.4-17-17.4-17s-7.5 6.2-17.4 17v210.1c9.9 10.8 17.4 17 17.4 17s7.5-6.2 17.4-17V65.6z"
  })), /* @__PURE__ */ a.createElement("path", {
    d: "M209 105.9v129.5c10.5 18.5 23.3 33.7 32.9 43.8V62.1c-9.6 10.1-22.4 25.3-32.9 43.8zm94 0c-10.5-18.5-23.3-33.7-32.9-43.8v217.2c9.6-10.1 22.4-25.3 32.9-43.8V105.9z",
    fill: "#A2001D"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M303 105.9v129.5c10.6-18.8 18.8-41 18.8-64.8s-8.2-45.9-18.8-64.7zm-94 0v129.5c-10.6-18.8-18.8-41-18.8-64.8s8.2-45.9 18.8-64.7z"
  }));
}, s0 = function(e) {
  var t = e.title, r = s(e, S8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 256,
    cy: 170.7,
    r: 170.7
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M382.4 170.7 330.8 195l27.5 50-56.1-10.7-7.1 56.6-39.1-41.7-39.1 41.7-7.1-56.6-56.1 10.7 27.5-50-51.6-24.3 51.6-24.3-27.5-50.1 56.1 10.8 7.1-56.7L256 92.1l39.1-41.7 7.1 56.7 56.1-10.8-27.5 50.1z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#D80027",
    cx: 257.4,
    cy: 170.7,
    r: 71.6
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M214.2 170.7c-2.1 0-4.1.1-6.2.3.1 12 4.4 22.9 11.6 31.5 3.8-10.3 9.5-19.6 16.7-27.7-6.9-2.7-14.3-4.1-22.1-4.1zm26.6 46.5c5.2 1.9 10.8 2.9 16.6 2.9 5.8 0 11.4-1 16.6-2.9-2.8-11.1-8.7-21-16.6-28.8-7.9 7.8-13.8 17.7-16.6 28.8zm59.4-71.2c-8.5-14.8-24.5-24.7-42.8-24.7-18.3 0-34.2 9.9-42.8 24.7 15.6.1 30.2 4.3 42.8 11.6 12.6-7.3 27.2-11.6 42.8-11.6zm-21.7 28.8c7.2 8 12.9 17.4 16.7 27.7 7.2-8.5 11.5-19.5 11.6-31.5-2-.2-4.1-.3-6.2-.3-7.7 0-15.2 1.4-22.1 4.1z",
    fill: "#FFDA44"
  }));
}, o0 = function(e) {
  var t = e.title, r = s(e, T8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v114H0zm0 228h513v114H0z",
    fill: "#0052B4"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M303.5 196.6v-17.8h-11.9v-23.7l-11.9-11.9-11.8 11.9v-23.8L256 119.5l-11.9 11.8v23.8l-11.8-11.9-11.9 11.9v23.7h-11.9v17.8h-11.9v17.8h118.8v-17.8z"
  }));
}, h0 = function(e) {
  var t = e.title, r = s(e, B8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 450 300"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#CE1126",
    d: "M0 0h450v300H0V0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FCD116"
  }, /* @__PURE__ */ a.createElement("circle", {
    cx: 227.6,
    cy: 161.2,
    r: 56.2
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m254.1 73.4-23.7 26 28.6 6.5zm-51.5.2-4.8 33.1 28.5-8zm94.3 26.7-34.7 8.5 20.1 23.7zm-138.3-1.8 15.5 32.7 20.2-22.7zm159 45.3-34.4-9.9 5.6 29.5zm-182-2.6 31.9 19.8 5.2-27.7z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#003F87",
    d: "M0 175h450v125H0V175z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 267c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21zm0-43c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21zm0-43c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21z"
  }), /* @__PURE__ */ a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#FCD116",
    d: "m183.2 48.3-1.1-5.3 22.4-3.7s-30.1-7.1-40-10.7c-14.3-5.1-16.3-12.1-16.3-12.1s44.7 11 64.8 11c4.3 0 12.8 10.7 12.8 10.7s14.8-14.9 21.9-15.4c32.1-2.3 66.6-6.4 66.6-6.4s-10 6.7-16 8.5c-16.2 4.9-50.6 11.7-50.6 11.7l-4.8 7.5H277l-14.4 4.3 7.4 6.9s-7.8-4.1-18.1-2.1c-7.1 1.3-15.4 6-22.9 8-18.7 4.8-29.9-12.8-29.9-12.8l-15.9-.1z"
  }));
}, u0 = function(e) {
  var t = e.title, r = s(e, L8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v85.5H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.5h513V171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 171h513v85.5H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M256.5 171 0 342V0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M68.6 170.7c0-24.9 17.5-45.6 40.8-50.7-3.6-.8-7.3-1.2-11.1-1.2-28.7 0-51.9 23.3-51.9 51.9s23.3 51.9 51.9 51.9c3.8 0 7.5-.4 11.1-1.2-23.3-5.1-40.8-25.9-40.8-50.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m108.9 126.1 2.7 8.5h9l-7.3 5.3 2.8 8.5-7.2-5.2-7.3 5.2 2.8-8.5-7.2-5.3h8.9zm0 22.3 2.7 8.5h9l-7.3 5.3 2.8 8.5-7.2-5.3-7.3 5.3 2.8-8.5-7.2-5.3h8.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m108.9 170.7 2.7 8.5h9l-7.3 5.2 2.8 8.5-7.2-5.2-7.3 5.2 2.8-8.5-7.2-5.2h8.9zm0 22.2 2.7 8.5h9l-7.3 5.3 2.8 8.5-7.2-5.3-7.3 5.3 2.8-8.5-7.2-5.3h8.9z"
  })));
}, m0 = function(e) {
  var t = e.title, r = s(e, I8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M512 0H0v342"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M307.7 0 0 194.5V342h206.9L513 148.5V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M513 0H385.2L0 249.4V341l126.2 1L513 91.6z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m141.1 187 31.2 24 32.3-22.2-13.1 37 31.1 23.9-39.2-1.1-13.2 37-11.1-37.6-39.2-1.1 32.3-22.2zM310.6 70.8l31.2 23.9 32.3-22.2-13.1 37 31.1 23.9-39.2-1.1-13.2 37-11.1-37.6-39.2-1.1 32.4-22.2z",
    fill: "#FFF"
  }));
}, f0 = function(e) {
  var t = e.title, r = s(e, O8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#91DC5A",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v57.188H0zm0 284.1h513v57.177H0z",
    fill: "#0052B4"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 79.9h513v181.582H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 190.33,
    cy: 171,
    r: 65.668
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "m190.3 105 14.8 45.3h47.7l-38.6 28.1 14.8 45.5-38.7-28.2-38.6 28.1 14.8-45.4-38.6-28.1h47.7z"
  }));
}, v0 = function(e) {
  var t = e.title, r = s(e, R8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h900v600H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    transform: "rotate(-56.31)"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M-75 228.3H75m-150 37.5H75m-150 37.5H75m-150 475H75m-150 37.5H75m-150 37.5H75",
    stroke: "#000",
    strokeWidth: 25
  }), /* @__PURE__ */ a.createElement("path", {
    stroke: "#FFF",
    strokeWidth: 12.5,
    d: "M0 753.3v125"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#ca163a",
    cy: 540.8,
    r: 150
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0e4896",
    d: "M0 390.8c-41.4 0-75 33.6-75 75s33.6 75 75 75 75 33.6 75 75-33.6 75-75 75c-82.8 0-150-67.2-150-150s67.2-150 150-150z"
  })), /* @__PURE__ */ a.createElement("path", {
    d: "m231.56 535.73-83.205-124.808M262.76 514.928l-83.205-124.807m114.407 104.006-83.205-124.808m478.43-138.675-83.205-124.807M720.39 209.843 637.184 85.036m114.407 104.006L668.386 64.234",
    stroke: "#000",
    strokeWidth: 25
  }), /* @__PURE__ */ a.createElement("path", {
    stroke: "#FFF",
    strokeWidth: 12.5,
    d: "m205.6 462.897 31.202-20.8m389.981-259.989 36.444-24.296m31.202-20.801 31.202-20.801"
  }));
}, p0 = function(e) {
  var t = e.title, r = s(e, k8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M167 227.6 0 341.3V0l167 113.8z"
  }));
}, g0 = function(e) {
  var t = e.title, r = s(e, V8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#6DA544",
    cx: 384,
    cy: 96.5,
    r: 29.7
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M332.1 89H436v44.5H332.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M435.9 170.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M332.1 200.3V230h15.6c9.4 9.2 22.2 14.8 36.3 14.8 14.1 0 27-5.7 36.3-14.8h15.6v-29.7H332.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M332.1 126.1v44.5c0 39.8 51.9 51.9 51.9 51.9s51.9-12.2 51.9-51.9v-44.5H332.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M384 149.9c-13 0-13 11.9-26 11.9s-13-11.9-26-11.9v20.8c13 0 13 11.9 26 11.9s13-11.9 26-11.9 13 11.9 26 11.9 13-11.9 26-11.9v-20.8c-13 0-13 11.9-26 11.9s-13-11.9-26-11.9zm0-41.6c-13 0-13 11.9-26 11.9s-13-11.9-26-11.9v20.8c13 0 13 11.9 26 11.9s13-11.9 26-11.9 13 11.9 26 11.9 13-11.9 26-11.9v-20.8c-13 0-13 11.9-26 11.9s-13-11.9-26-11.9z",
    fill: "#F3F3F3"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v22.6l-46.1 30.7H256v64h-46.1L256 148v22.7h-22.6l-73.4-49v49H96v-49l-73.4 49H0V148l46.1-30.7H0v-64h46.1L0 22.6V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176zM0 170.7v-15.1l57.4-38.3H80zm256 0v-15.1l-57.4-38.3H176z"
  })));
}, $0 = function(e) {
  var t = e.title, r = s(e, G8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#36B6CC",
    d: "M0 0h513v342H0V0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFD400",
    cx: 256.5,
    cy: 170.9,
    r: 68.4
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFD400",
    d: "m256.5 251.5-27.9 41.7-7.1-49.7-43.2 25.5 15.2-47.8-50 4.2 34.4-36.5-46.9-18 46.8-18-34.4-36.5 50 4.2-15.2-47.8 43.2 25.4 7.1-49.7 27.9 41.7 27.9-41.7 7.1 49.7 43.2-25.4-15.2 47.8 50-4.2-34.3 36.6 46.8 17.9-46.8 18 34.4 36.5-50-4.2 15.2 47.8-43.2-25.4-7.1 49.7c0-.1-27.9-41.8-27.9-41.8zm0-.8c44.1 0 79.9-35.8 79.9-79.9S300.6 91 256.5 91s-79.9 35.8-79.9 79.9 35.8 79.8 79.9 79.8zM22.8 28.3c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6V28.3zm0 45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6V74zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm22.8-22.8c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7V245c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V188zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V96.8zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V51.2z"
  }));
}, E0 = function(e) {
  var t = e.title, r = s(e, j8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 .1h513v90.7H0zm0 251.2h513V342H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 256.5,
    cy: 171,
    r: 65.9
  }));
}, w0 = function(e) {
  var t = e.title, r = s(e, U8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 .2h513v90.7H0zm.5 251.1H513V342H.5z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M290.3 193.5 256 130.7l-34.3 62.8h25.7v17.2h17.2v-17.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#14AF5A",
    d: "M241.3 213.1c4.4-4.4 4.4-11.6-.1-16l4.7 4.7c-5.2-4.7-12.2-6.6-19.1-5.3l-23.5 5.9c-6.1 1.5-6.8-.4-1.8-4.2l27.1-20.3c5.1-3.8 4.2-6.9-2.3-6.9h-11c-6.4 0-7-2.3-1.5-5.1l25.3-12.7c5.6-2.8 5.1-5.1-1.5-5.1h-11c-6.4 0-7.4-3.1-2.3-6.9l27.1-20.3c5.6-3.8 12.9-3.8 18.5 0l27.1 20.3c5.1 3.8 4.2 6.9-2.3 6.9h-11c-6.4 0-7 2.3-1.5 5.1l25.3 12.7c5.6 2.8 5.1 5.1-1.5 5.1h-11c-6.4 0-7.4 3.1-2.3 6.9l27.1 20.3c5.1 3.8 4.4 5.7-1.8 4.2l-23.5-5.9c-6.8-1.3-13.9.6-19.1 5.3l4.7-4.7c-4.4 4.4-4.5 11.5-.1 16l6.8 6.8c4.4 4.4 3.1 8-3.3 8h-45.8c-6.2 0-7.7-3.6-3.3-8 .1.1 6.9-6.8 6.9-6.8z"
  }));
}, z0 = function(e) {
  var t = e.title, r = s(e, Z8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#55B2FF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#F3F3F3",
    d: "M148.5 298.1h216l-108-254.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#333",
    d: "m186 272.7 70.5-160.3L327 272.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M148.5 298.1h216l-108-101.7z"
  }));
}, y0 = function(e) {
  var t = e.title, r = s(e, W8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M149.3 98.1c0-14-11.3-25.3-25.3-25.3-6.5 0-12.4 2.4-16.9 6.4V64.4h8.4V47.5h-8.4v-8.4H90.3v8.4h-8.4v16.9h8.4v14.9c-4.5-4-10.4-6.4-16.9-6.4-14 0-25.3 11.3-25.3 25.3 0 7.5 3.3 14.2 8.4 18.8v14.9h84.3V117c5.3-4.7 8.5-11.5 8.5-18.9z"
  }));
}, x0 = function(e) {
  var t = e.title, r = s(e, K8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M222.6 22.3h267.1v296.8H222.6z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M22.3 22.3h200.3v296.8H22.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M200.3 0h22.3v342h-22.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M22.3 22.3h89v296.8h-89z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M111.3 22.3h89v296.8h-89z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M368.2 156.8c-1.4-2 0-37.9 0-37.9.9-7.4.1-8.4 1-11.4.9-2.9 5.4-11.6 5.4-11.6s-6-2.3-10.3-.6c-4.3 1.7-24.7-7.5-31.2 3.4-4.4 7-23.6 16.2-24.6 14-1-2.2-5.9-5-6.9-2.9s-.7 13.9 0 16c.8 2.6 9.8 2 12.3 3.1 3.7 1.8 12.2 8.2 11.9 10.7-.3 2.5-22.5-6-24.2-4.5-1.4 1.2-1.9 13.2-.4 15 1.8 2.1 23.4 5.6 25 7.5 1.6 1.9-13.1 7.4-12.3 25 .7 14.7 8 17.4 8 17.4s-2.4 3.6-7.8 3.1c-6.2-.6-27.4-17.7-27.4-17.7s-3.5-109 3.6-121.4c4.9-8.5-22.7 10.1-22.7 50.8V151c0 6.6-1.4 22.4 2.6 34 0 0-.4 46.9 1.5 49.6s12.7 2.2 14.8 0 0-30 0-30c7.7.2 18.3 17.5 32.5 16.4 20.6-1.6 28.7-9.9 34.3-5 8.1 7.1 5.5 23.2.4 31.5-2.2 3.5-14.3 4.7-15.7 7.6-1.4 2.9.5 5.4.5 5.4h29.7s1.4-20.5 2.7-26.1c1.3-5.7-.6-10.7 5.9-10.4 23.5 1.1 39.8-15.3 45.5-8 3.2 4.1 5.6 29.9 3.3 33.3-2.2 3.4-13.8 2.8-15.2 6.7-1.4 4 .8 4.4.8 4.4h29.7s-.4-21.2 2.5-27.7 4.9-10.4 9.3-17.2c4.4-6.8 11.3-15.7 11.3-36.2 0-14.2-8.1-22.8-8.1-22.8H417c-14.1.2-47.4 2.3-48.8.3zm-136-124.5c10.7-10.6 20.2-2.7 22.2 2.1 1.9 4.8 2.1 8.2 2.8 13.6.9 6.9 4.9 14 4.9 14s-7.1-3.8-14.7-4.2c-4.7-.3-9-.6-13.6-2.5-5.7-2.3-11.7-12.9-1.6-23zm248.4-.1c10.7 10.6 2.8 20.2-2 22.2s-8.2 2.1-13.6 2.8c-6.9.9-14 5-14 5s3.7-7.1 4.2-14.7c.3-4.7.6-9.1 2.4-13.6 2.2-5.7 12.8-11.8 23-1.7zm.1 276.9c-10.7 10.6-20.2 2.6-22.2-2.2-1.9-4.8-2.1-8.2-2.7-13.6-.8-6.9-4.9-14.1-4.9-14.1s7 3.8 14.7 4.3c4.7.3 9 .6 13.6 2.5 5.7 2.4 11.7 13.1 1.5 23.1zm-248.2-.1c-10.6-10.7-2.7-20.2 2.1-22.2 4.8-1.9 8.2-2.1 13.6-2.8 6.9-.9 14-4.9 14-4.9s-3.8 7.1-4.2 14.7c-.3 4.7-.6 9-2.5 13.6-2.3 5.7-12.9 11.8-23 1.6z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "none",
    stroke: "#FFDA44",
    strokeWidth: 6,
    strokeMiterlimit: 10,
    d: "M446.9 162.4s7.5-2.6 8.4-16.1c.6-8.6-19.8-16-39-11.5-19.7 4.6-34-3.1-34-14.6 0-22.9 29.7-16.2 38.9-11.3 9.1 4.9 29.7 23.5 35.1 9.4"
  }));
}, M0 = function(e) {
  var t = e.title, r = s(e, Y8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v31.1H0zm0 62.2h513v31.1H0zm0 62.3h513v31.1H0zm0 62.3h513v31.1H0zm0 62.5h513v31.1H0zm0 61.6h513V342H0z",
    fill: "#bf0a30"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#002868",
    d: "M0 0h155.6v155.6H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m77.8 30.2 10.7 32.9h34.6l-28 20.4 10.7 32.9-28-20.3-28 20.3 10.7-32.9-28-20.4h34.6z"
  }));
}, F0 = function(e) {
  var t = e.title, r = s(e, J8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 227.6h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m245.2 171 7.7-23.1c2-5.9 5.1-6 7.1 0l7.7 23.1 19.4 29.1c1.7 2.6 1.3 6.3-1.2 8 0 0-6.9 8-29.5 8s-29.5-8-29.5-8c-2.4-2-2.9-5.4-1.2-8l19.5-29.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256.5 171c-12.5 0-22.6-10.1-22.6-22.6 0-12.5 10.1-22.6 22.6-22.6s22.6 10.1 22.6 22.6c0 12.5-10.2 22.6-22.6 22.6zm0 0c6.2 0 11.3-16.3 11.3-22.6 0-6.2-5.1-11.3-11.3-11.3-6.2 0-11.3 5.1-11.3 11.3 0 6.3 5 22.6 11.3 22.6z"
  }));
}, H0 = function(e) {
  var t = e.title, r = s(e, X8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 228h513v114H0z"
  }));
}, b0 = function(e) {
  var t = e.title, r = s(e, Q8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 228h513v114H0z"
  }));
}, C0 = function(e) {
  var t = e.title, r = s(e, q8);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    className: "prefix__st1",
    d: "M0 0h513v127.6H0zm0 214.4h513V342H0z",
    fill: "#A2001D"
  }));
}, _0 = function(e) {
  var t = e.title, r = s(e, ed);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m281.4 150.7 9 12.3 14.5-4.7-9 12.4 9 12.3-14.5-4.7-9 12.3v-15.2l-14.5-4.7 14.5-4.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M257 201.5c-17 0-30.9-13.8-30.9-30.9s13.8-30.9 30.9-30.9c5.3 0 10.3 1.3 14.7 3.7-6.9-6.7-16.2-10.8-26.6-10.8-21 0-38 17-38 38s17 38 38 38c10.3 0 19.7-4.1 26.6-10.8-4.4 2.4-9.4 3.7-14.7 3.7z"
  })));
}, N0 = function(e) {
  var t = e.title, r = s(e, td);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 .3V342h513V.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#20661B",
    d: "M359.8 148.9h-73.3l-22.7-69.7-22.7 69.7h-73.3l59.3 43.1-22.7 69.7 59.3-43.1 59.3 43.1-22.5-69.7 59.3-43.1zm-116.1 37.7 7.7-23.6h24.8l7.7 23.6-20.1 14.6-20.1-14.6zm27.9-37.7H256l7.8-24 7.8 24zm24.3 29-4.8-14.9h25.3l-20.5 14.9zM236.6 163l-4.8 14.9-20.5-14.9h25.3zm-5.3 61.8 7.8-24 12.6 9.2-20.4 14.8zm44.5-14.9 12.6-9.2 7.8 24-20.4-14.8z"
  }));
}, A0 = function(e) {
  var t = e.title, r = s(e, ad);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.333h512v341.333H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#c70000",
    d: "M0 85.333h512V256H0z"
  }));
}, D0 = function(e) {
  var t = e.title, r = s(e, nd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#AF7F59",
    d: "M206.2 129.1h33.2L256 79.3l16.6 49.8h33.2v99.6L256 262l-49.8-33.2v-99.7zm33.2 33.3v49.8h33.2v-49.8h-33.2z"
  }));
}, P0 = function(e) {
  var t = e.title, r = s(e, rd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#E6BE53",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E01D24",
    d: "M20 20h473v302H20z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E6BE53",
    d: "M248.5 112.9c4.4 4.4 11.6 4.4 16 0l-4.7 4.7 22.7-22.7c4.9-4.5 12.1-5.6 18.2-2.8l2.1 1c5.7 2.9 6.7 8.7 2.3 13.1l4.7-4.7-22.8 22.8c-4.5 4.9-5.6 12.1-2.8 18.2l1 2.1c2.9 5.7 5.1 15.4 5.1 21.6v-11.3c0 6.2 4.4 9.1 10.2 6.2l2.1-1c5.7-2.9 6.7-8.7 2.3-13.1l4.7 4.7c-4.4-4.4-4.4-11.6 0-16l-4.7 4.7c5.2-5.5 9.6-11.6 13.1-18.2l1-2.1c2.9-5.7 6.3-15.1 7.9-21.2l5.8-23.3c1.5-6 5.9-6.8 9.6-1.8l20.2 26.9c3.8 5.1 6.9 14 6.9 20.6v22.4c0 6.3-2.2 15.8-5.1 21.7l-1 2.1c-3.5 6.6-7.9 12.7-13.1 18.2l-6.8 6.8c-5.4 5.2-11.5 9.6-18.2 13.1l-2.1 1c-5.7 2.9-15.5 5.1-21.6 5.1-6.2 0-6.9 2.2-1.1 5.1l2.1 1c5.7 2.9 13.8 8.7 18.2 13.1l-4.7-4.7c4.4 4.4 11.6 4.4 16 0l-4.7 4.7c4.4-4.4 11.6-4.4 16 0L339 226c4.6 4.9 5.7 12.1 2.9 18.2l-1 2.1c-2.9 5.7-10.4 10.2-16.4 10.2-7.5-.3-14.8-2-21.6-5.1l-2.1-1c-6.5-3.6-11.8-8.9-15.4-15.4l-1-2.1c-2.9-5.7-8.7-6.7-13.1-2.3l4.7-4.7c-4.4 4.7-5.2 11.8-1.8 17.3l10.3 15.4c3.4 5.1 2 12.1-3.1 15.5L266 284.4c-5.7 3.4-12.8 3.4-18.6 0L232 274.1c-5.1-3.4-6.5-10.3-3.1-15.5l10.3-15.4c3.4-5.5 2.6-12.6-1.8-17.3l4.7 4.7c-4.4-4.4-10.2-3.6-13.1 2.3l-1 2.1c-2.9 5.7-9.5 12.4-15.4 15.4l-2.1 1c-5.7 2.9-15.5 5.1-21.6 5.1-6.9-.3-13.1-4.2-16.4-10.2l-1-2.1c-2.8-6.1-1.6-13.3 2.9-18.2l-4.7 4.7c4.4-4.4 11.6-4.4 16 0L181 226c4.4 4.4 11.6 4.4 16 0l-4.7 4.7c5.5-5.2 11.6-9.6 18.2-13.1l2.1-1c5.7-2.9 5-5.1-1.1-5.1-7.5-.3-14.8-2-21.6-5.1l-2.1-1c-6.6-3.5-12.7-7.9-18.2-13.1l-6.8-6.8c-5.2-5.4-9.6-11.5-13.1-18.2l-1-2.1c-3.1-6.8-4.9-14.2-5.1-21.7V121c0-6.3 3.1-15.6 6.9-20.6l20.2-26.9c3.8-5.1 8.1-4.3 9.6 1.8l5.8 23.3c2 7.3 4.6 14.4 7.9 21.2l1 2.1c2.9 5.7 8.7 13.8 13.1 18.2l-4.7-4.7c4.4 4.4 4.4 11.6 0 16l4.7-4.7c-4.4 4.4-3.6 10.2 2.3 13.1l2.1 1c5.7 2.9 10.2 0 10.2-6.2v11.3c0-6.2 2.2-15.7 5.1-21.6l1-2.1c2.8-6.1 1.7-13.2-2.8-18.2l-22.7-22.7 4.7 4.7c-4.4-4.4-3.6-10.2 2.3-13.1l2.1-1c6.1-2.8 13.2-1.7 18.2 2.8l22.7 22.7-4.8-4.5zm-18-40.7c-4.4-4.4-3.2-9.5 2.8-11.5l12.4-4.2c6-2 15.5-2 21.5 0l12.4 4.2c6 2 7.2 7.1 2.8 11.5l-6.8 6.8c-5.3 4.7-12.1 7.5-19.2 7.9-6.2 0-14.8-3.5-19.2-7.9.1 0-6.7-6.8-6.7-6.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#215F90",
    d: "M233.9 200.2c0 6.2 1.7 6.4 4.2.5 0 0 7.1-23.2 18.4-23.2 11.3 0 18.6 23.6 18.6 23.6 2.2 5.7 4 5.3 4-1.1v-11.2c0-18.7-10.1-33.9-22.6-33.9-12.5 0-22.6 15.2-22.6 33.9v11.4z"
  }));
}, S0 = function(e) {
  var t = e.title, r = s(e, ld);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 108 72"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h108v72H0z",
    fill: "#003787"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h108L60 48v24H48V48z",
    fill: "#fff"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 54,
    cy: 30,
    r: 8,
    fill: "#f9d90f"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M44 30h20L54 48z",
    fill: "#fff"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M54 48 38 33h32z",
    fill: "#cf142b"
  }));
}, T0 = function(e) {
  var t = e.title, r = s(e, id);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M512 426.666V85.329H0v341.337h512z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M512 85.331H0v170.666h512V85.331z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.334h181.793v341.337H0z"
  }));
}, B0 = function(e) {
  var t = e.title, r = s(e, dd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#1E509C",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 176.1V81.3L0 342l513-165.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#F18D36",
    d: "M513 0v81.3L0 342 513 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m126.7 99.3-7.8-54.1-7.7 54.1-20.8-23.7 10.7 31.6-31.5-10.7 23.6 20.8-54.1 7.7 54.1 7.7-23.6 20.8 31.5-10.7-10.7 31.6 20.8-23.7 7.7 54.1 7.8-54.1 20.7 23.7-10.6-31.6 31.5 10.7-23.6-20.8 54-7.7-54-7.7 23.6-20.8-31.5 10.7 10.6-31.6z"
  }));
}, L0 = function(e) {
  var t = e.title, r = s(e, cd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M383.875 426.662 256 252.286l26.827 174.376zM133.565 85.33 256 252.286 230.314 85.33zm95.606 341.332L256 252.286 128.124 426.662zM0 85.33V212.9l256 39.386L28.333 85.33zm0 341.332h18.212L256 252.286 0 291.67zm256-174.376L512 212.9V85.33h-28.331zM281.686 85.33 256 252.286 378.434 85.33zM512 426.662V291.671l-256-39.385 237.787 174.376z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 256,
    cy: 252.29,
    r: 59.359
  })), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFDA44",
    cx: 256,
    cy: 252.29,
    r: 44.522
  }));
}, I0 = function(e) {
  var t = e.title, r = s(e, sd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 85.331h170.663v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M341.337 85.331H512v341.337H341.337z"
  }));
}, O0 = function(e) {
  var t = e.title, r = s(e, od);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M384 227.261h-97.783L256 134.265l-30.217 92.997H128l79.108 57.475-30.217 92.998L256 320.925l79.108 56.81-30.217-92.998L384 227.261z"
  }));
}, R0 = function(e) {
  var t = e.title, r = s(e, hd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#095FAD",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M342 0h171v342H342zM0 0h171v342H0z",
    fill: "#BE1229"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFDA44"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M108.3 166.3h14.8v74.2h-14.8zm-59.4 0h14.8v74.2H48.9z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 86,
    cy: 203.4,
    r: 14.8
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M71.2 225.7h29.7v14.8H71.2zm0-59.4h29.7v14.8H71.2z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 86,
    cy: 144,
    r: 14.8
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M76.3 123.9h19.5L86 108.3z"
  })));
}, k0 = function(e) {
  var t = e.title, r = s(e, ud);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#00745a",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M285.682 248.878c-4.19 0-8.166.836-11.861 2.164 2.023-4.509 3.379-9.527 3.379-14.885 0-21.201-21.201-37.101-21.201-37.101s-21.201 15.901-21.201 37.101c0 5.357 1.356 10.375 3.379 14.885-3.693-1.328-7.671-2.164-11.861-2.164-21.201 0-37.101 21.201-37.101 21.201s15.901 21.201 37.101 21.201c12.429 0 23.031-7.286 29.682-13.315 6.65 6.03 17.251 13.315 29.682 13.315 21.201 0 37.101-21.201 37.101-21.201s-15.899-21.201-37.099-21.201z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m256 152.111 4.38 13.476h14.171l-11.464 8.332 4.376 13.476-11.463-8.33-11.463 8.33 4.376-13.476-11.464-8.332h14.171zm-53.888 23.572 8.425 7.585 9.818-5.667-4.61 10.355 8.423 7.588-11.274-1.185-4.611 10.355-2.358-11.088-11.275-1.185 9.818-5.669zm-39.45 39.449 11.09 2.358 5.668-9.818 1.186 11.274 11.089 2.358-10.357 4.61 1.186 11.274-7.587-8.423-10.357 4.61 5.669-9.818zm147.227-39.449-8.425 7.585-9.818-5.667 4.611 10.355-8.425 7.588 11.275-1.185 4.61 10.355 2.359-11.088 11.275-1.185-9.818-5.669zm39.449 39.449-11.089 2.358-5.669-9.818-1.186 11.274-11.088 2.358 10.357 4.61-1.185 11.274 7.586-8.423 10.357 4.61-5.669-9.818z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256 350.642c16.84 0 32.363-5.619 44.816-15.073h-89.63c12.451 9.454 27.974 15.073 44.814 15.073zm-68.023-44.522a74.138 74.138 0 0 0 8.85 15.073h118.345a74.13 74.13 0 0 0 8.85-15.073H187.977z",
    fill: "#FFF"
  }));
}, V0 = function(e) {
  var t = e.title, r = s(e, md);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 750 500"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0071BC",
    d: "M0 0h750v500H0V0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF",
    stroke: "#000",
    strokeWidth: 1.9
  }, /* @__PURE__ */ a.createElement("circle", {
    cx: 375,
    cy: 245,
    r: 225,
    fill: "#fff"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 375,
    cy: 245,
    r: 165,
    fill: "#0071BC"
  })), /* @__PURE__ */ a.createElement("g", {
    stroke: "#000"
  }, /* @__PURE__ */ a.createElement("path", {
    fill: "#8C8A8C",
    strokeWidth: 1.9,
    d: "M444.7 450c.7 11-7.8 20-18.8 20H323.6c-11 0-19.5-9-19-20l16.7-325c.6-11 10-20 21-20h61.4c11 0 20.5 9 21.2 20l19.8 325z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    strokeWidth: 2,
    strokeLinejoin: "round",
    d: "m373 114 30 93h97l-78 56 29 92-78-56-78 57 30-93-79-57h97l30-92z"
  })));
}, G0 = function(e) {
  var t = e.title, r = s(e, fd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#fff"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M512 148.4v44.5H278.3v148.4h-44.6V192.9H0v-44.5h233.7V0h44.6v148.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M101 36.1c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1zm284 0c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1zm-5.4 199c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7s3.4 6.5 7 6.3l1.7-.1zm-278.6 0c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8s4.2 5.9 7.8 5.2c.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1z"
  })));
}, j0 = function(e) {
  var t = e.title, r = s(e, vd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 100 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#006233",
    d: "M0 100h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#cd2a3e",
    d: "M0 100h513v46H0zm0 296h513v46H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffc400",
    d: "M256 298.851c-45.956 0-84.348-32.298-93.767-75.429A96.288 96.288 0 0 0 160 243.994c0 53.02 42.979 96 96 96s96-42.98 96-96c0-7.066-.785-13.942-2.233-20.572-9.419 43.131-47.811 75.429-93.767 75.429z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffc400",
    d: "m255.999 171.994 8.935 27.502h28.918l-23.394 16.996 8.936 27.503-23.395-16.998-23.394 16.998 8.937-27.503-23.394-16.996h28.915z"
  }));
}, U0 = function(e) {
  var t = e.title, r = s(e, pd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#1B4991",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00A2B8",
    stroke: "#FFF",
    strokeWidth: 3,
    d: "M318.2 106.7v106.5c0 51.9 67.8 67.8 67.8 67.8s67.8-15.9 67.8-67.8V106.7H318.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A35023",
    d: "M319.7 212.7c0 50.8 66.3 66.3 66.3 66.3s66.3-15.6 66.3-66.3H319.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M415.1 155.1h-19.4v-19.4h-19.4v19.4H357v19.4h19.3v58.1h19.4v-58.1h19.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M155.8 115 256 170.7v-15.8L184.2 115zm-84 0L0 154.9v15.8L100.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9zm84 0L256 15.7V0L155.8 55.6z"
  }));
}, Z0 = function(e) {
  var t = e.title, r = s(e, gd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#C31B28",
    d: "M256 0h256.5v342H256z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ACABB1",
    stroke: "#C31B28",
    strokeWidth: 2,
    d: "M101.2 68.2V33H66v35.2H30.8v35.2H66v35.2h35.2v-35.2h35.2V68.2z"
  }));
}, W0 = function(e) {
  var t = e.title, r = s(e, $d);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#f7ce00",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#e32737",
    d: "M0 85.331h512v85.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#191f6a",
    d: "M0 170.657h512v85.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00a04e",
    d: "M0 341.331h512v85.337H0z"
  }));
}, K0 = function(e) {
  var t = e.title, r = s(e, Ed);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#d01920",
    d: "M0 85.331h512v341.333H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#017c3b",
    d: "M144.696 174.375h222.609v163.25H144.696z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M283.484 304.226c-26.637 0-48.232-21.594-48.232-48.232s21.594-48.232 48.232-48.232c8.306 0 16.12 2.1 22.943 5.797-10.703-10.467-25.341-16.927-41.494-16.927-32.784 0-59.362 26.577-59.362 59.362s26.578 59.362 59.362 59.362c16.154 0 30.791-6.461 41.494-16.927-6.822 3.698-14.636 5.797-22.943 5.797z"
  }));
}, Y0 = function(e) {
  var t = e.title, r = s(e, wd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#272727",
    d: "M0 0h512v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#e40112",
    d: "M0 114h512v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#07893f",
    d: "M0 228h512v114H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#e40112",
    cx: 256,
    cy: 125,
    r: 95
  }));
}, J0 = function(e) {
  var t = e.title, r = s(e, zd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#dc2339",
    d: "M342 0H0v341.3h513V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#11865d",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M171 0h171v342H171z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#8C9157",
    d: "M195.8 171.2c0 21.6 11.5 41.7 30.3 52.5 5.8 3.4 13.2 1.4 16.6-4.4 3.4-5.8 1.4-13.2-4.4-16.6-11.3-6.5-18.2-18.5-18.2-31.5 0-6.7-5.4-12.1-12.1-12.1-6.7 0-12.2 5.4-12.2 12.1zm93.4 51.1c17.5-11.1 28-30.4 28-51.1 0-6.7-5.4-12.1-12.1-12.1s-12.1 5.4-12.1 12.1c0 12.4-6.3 24-16.8 30.7-5.7 3.5-7.5 10.9-4.1 16.7s10.9 7.5 16.7 4.1c0-.2.2-.3.4-.4z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#C59262",
    cx: 256.5,
    cy: 159.1,
    rx: 24.3,
    ry: 36.4
  }));
}, X0 = function(e) {
  var t = e.title, r = s(e, yd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v24.4H0zm0 48.9h513v24.4H0zm0 48.8h513v24.4H0zm0 48.9h513V171H0zm0 48.8h513v24.4H0zm0 48.9h513v24.4H0zm0 48.8h513v24.4H0z",
    fill: "#c00"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#006",
    d: "M0 0h256.5v195.4H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M153.3 42.1C122.6 30.7 88.5 46.3 77.1 77s4.2 64.8 34.9 76.2c13.3 5 28 5 41.4 0-30.7 24.5-75.4 19.6-100-11.1s-19.6-75.4 11.1-100c26-20.7 62.9-20.7 88.8 0zm26.7 75-20.6 23.3 5.4-30.6-31-1.6 27.3-14.9L143 68l28.6 12 8.4-29.9 8.4 29.9L217 68l-18 25.4 27.3 14.9-31 1.6 5.4 30.6-20.7-23.4z",
    fill: "#fc0"
  }));
}, Q0 = function(e) {
  var t = e.title, r = s(e, xd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.333h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f4d900",
    d: "M0 323.333h513v104H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#006d66",
    d: "M0 85.333h513v104H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 204.333h513v104H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#cb0f31",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f4d900",
    d: "m83.477 195.132 15.107 46.498h48.894l-39.554 28.739 15.107 46.499-39.554-28.738-39.555 28.738 15.11-46.499-39.554-28.739H68.37z"
  }));
}, q0 = function(e) {
  var t = e.title, r = s(e, Md);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 426.663V85.337h512"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M512 152.222V85.337H411.67L0 359.778v66.885h100.33z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m187.737 189.212-22.741 10.696 12.11 22.024-24.693-4.724-3.129 24.945-17.199-18.347-17.2 18.347-3.129-24.945-24.693 4.723 12.109-22.023-22.739-10.696 22.74-10.697-12.11-22.022 24.693 4.722 3.13-24.944 17.199 18.347 17.2-18.347 3.128 24.944 24.693-4.722-12.108 22.024z"
  }));
}, en = function(e) {
  var t = e.title, r = s(e, Fd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 426.7"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#009543",
    d: "M0 293h640v133.7H0V293z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ED4135",
    d: "M0 132h640v161.3H0V132z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0035AD",
    d: "M0 0h640v133.3H0V0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FAE600",
    stroke: "#000",
    strokeWidth: 5.3,
    cx: 240,
    cy: 213.3,
    r: 157.3
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m307.9 354.5-31.8 12-36.1 4.2-37.8-2.4-35.9-15.5s28.6-29.3 40.7-33.5c8.6-3 22.4-3.7 22.4-3.7V122l-.3-66H246l-.5 67.5v191.7s15.3 1.2 22.1 4.1c11.3 4.9 40.3 35.2 40.3 35.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m212.727 102.375 42.955-21.418 5.577 11.187-42.955 21.417z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    cx: 237.8,
    cy: 280.5,
    rx: 16.8,
    ry: 26.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 237.4,
    cy: 143.4,
    r: 20.9
  }), /* @__PURE__ */ a.createElement("ellipse", {
    cx: 238.4,
    cy: 211.1,
    rx: 19.9,
    ry: 12.1
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M213.8 177h47v10h-47zm0 57h47v10h-47z"
  }));
}, tn = function(e) {
  var t = e.title, r = s(e, Hd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#e05206",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0db02b",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#e05206",
    cx: 256,
    cy: 256,
    r: 32
  }));
}, an = function(e) {
  var t = e.title, r = s(e, bd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.5 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.5h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.5h171v342H0zm342 0h171v342H342zm-38 226.495-48-152.001-48 152.001h36v39.999h24v-39.999z",
    fill: "#007b23"
  }));
}, nn = function(e) {
  var t = e.title, r = s(e, Cd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.5 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.5h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.5h171v342H0zm342 0h171v342H342z",
    fill: "#007b23"
  }));
}, rn = function(e) {
  var t = e.title, r = s(e, _d);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
    fill: "#338AF3"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M256 214.447c-22.949 0-41.553 18.603-41.553 41.553S233.05 297.553 256 297.553c22.949 0 41.553-18.603 41.553-41.553S278.949 214.447 256 214.447zm0 65.298c-13.114 0-23.745-10.631-23.745-23.745s10.631-23.745 23.745-23.745 23.745 10.631 23.745 23.745-10.631 23.745-23.745 23.745z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M276.563 261.936 256 256l-20.563 5.936-6.855 11.873h54.836z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "m256 226.32-13.709 23.744L256 256l13.709-5.936z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M235.437 261.936h41.126l-6.854-11.872h-27.418z"
  }));
}, ln = function(e) {
  var t = e.title, r = s(e, Nd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.5 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.5h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#cd1f2a",
    d: "M0 85.5h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1d4185",
    d: "M0 312h513v114H0z"
  }));
}, dn = function(e) {
  var t = e.title, r = s(e, Ad);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M512 295.883H202.195v130.783h-79.76V295.883H0v-79.772h122.435V85.329h79.76v130.782H512v61.218z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z"
  }));
}, cn = function(e) {
  var t = e.title, r = s(e, Dd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 426.663V85.337l280.419 174.75H87.61l183.576 166.576z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M244.769 249.888 10.199 103.71v312.754h234.57L61.193 249.888z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m98.003 324.433-14.589-6.863 7.77-14.13-15.844 3.03-2.008-16.005-11.035 11.772-11.036-11.772-2.008 16.005-15.843-3.031 7.77 14.131-14.591 6.863 14.591 6.862-7.77 14.13 15.844-3.029 2.007 16.004 11.036-11.772L73.332 358.4l2.008-16.004 15.843 3.03-7.769-14.13zm-9.735-132.771-10.612-4.991 5.651-10.278-11.523 2.205-1.461-11.641-8.026 8.561-8.026-8.561-1.46 11.641-11.525-2.205 5.652 10.278-10.613 4.991 25.972 5.194z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M93.462 191.662c0 17.212-13.953 31.165-31.165 31.165s-31.165-13.953-31.165-31.165"
  })));
}, sn = function(e) {
  var t = e.title, r = s(e, Pd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 239.994h512v32H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m174.802 341.329-19.124 8.996 10.184 18.521-20.767-3.973-2.631 20.978L128 370.422l-14.465 15.429-2.63-20.978-20.767 3.973 10.183-18.521-19.123-8.996 19.124-8.995-10.184-18.52 20.766 3.971 2.632-20.978L128 312.236l14.465-15.429 2.63 20.978 20.767-3.971-10.183 18.521z"
  }));
}, on = function(e) {
  var t = e.title, r = s(e, Sd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.334h256v170.663H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144 85.33h-32v69.333H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.329v15.083l57.377 38.251H80z"
  })), /* @__PURE__ */ a.createElement("path", {
    d: "M0 107.951v30.712h46.069zm96-22.62v48.913L22.628 85.331z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256 85.329v15.083l-57.377 38.251H176z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256 107.951v30.712h-46.069zm-96-22.62v48.913l73.372-48.913z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.329v15.083l57.377 38.251H80z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 107.951v30.712h46.069zm96-22.62v48.913L22.628 85.331z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256 85.329v15.083l-57.377 38.251H176z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256 107.951v30.712h-46.069zm-96-22.62v48.913l73.372-48.913z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 255.997v-15.082l57.377-38.252H80z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 233.376v-30.713h46.069zm96 22.618v-48.912l-73.372 48.912z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256 255.997v-15.082l-57.377-38.252H176z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#2E52B2"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M256 233.376v-30.713h-46.069zm-96 22.618v-48.912l73.372 48.912z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 128,
    cy: 170.66,
    r: 22.627
  })), /* @__PURE__ */ a.createElement("path", {
    d: "m128 154.663 3.97 12.222h12.854l-10.398 7.556 3.971 12.222L128 179.109l-10.398 7.554 3.972-12.222-10.398-7.556h12.853zm0 65.14 2.364 7.278h7.653l-6.19 4.498 2.364 7.278-6.191-4.498-6.191 4.498 2.364-7.278-6.19-4.498h7.652zm0-117.334 2.364 7.278h7.653l-6.19 4.498 2.364 7.278-6.191-4.498-6.191 4.498 2.364-7.278-6.19-4.498h7.652zm69.931 58.667 2.365 7.277h7.653l-6.192 4.499 2.365 7.279-6.191-4.498-6.191 4.498 2.365-7.279-6.191-4.499h7.652zm-139.862 0 2.364 7.277h7.653l-6.191 4.499 2.364 7.279-6.19-4.498-6.191 4.498 2.365-7.279-6.192-4.499h7.653z",
    fill: "#FFDA44"
  }));
}, hn = function(e) {
  var t = e.title, r = s(e, Td);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m425.301 233.745 3.388 10.428h10.963l-8.87 6.444 3.388 10.427-8.869-6.444-8.871 6.444 3.388-10.427-8.87-6.444h10.963zm-39.194 75.072 5.083 15.642h16.445l-13.305 9.667 5.082 15.64-13.305-9.667-13.305 9.667 5.083-15.64-13.305-9.667h16.445zm1.481-122.846 4.236 13.036h13.704l-11.088 8.054 4.235 13.034-11.087-8.056-11.088 8.056 4.235-13.034-11.087-8.054h13.704zm-37.712 47.32 5.082 15.641h16.446l-13.306 9.666 5.084 15.641-13.306-9.666-13.305 9.666 5.082-15.641-13.305-9.666h16.445z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256.003 85.329v30.564l-45.178 25.088h45.178v59.359H196.89l59.113 32.846v22.806h-26.69l-73.484-40.826v40.826h-55.652v-48.573l-87.429 48.573H.003v-30.553l45.168-25.099H.003v-59.359h59.103L.003 108.147V85.329h26.68l73.494 40.838V85.329h55.652v48.573l87.43-48.573z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 85.33h-32v69.334H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M155.826 200.344 256 255.998v-15.739l-71.847-39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M155.826 200.344 256 255.998v-15.739l-71.847-39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M155.826 200.344 256 255.998v-15.739l-71.847-39.915zm-83.98 0L0 240.259v15.739l100.174-55.654z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M100.174 140.983 0 85.33v15.738l71.847 39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100.174 140.983 0 85.33v15.738l71.847 39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M100.174 140.983 0 85.33v15.738l71.847 39.915zm83.98 0L256 101.068V85.33l-100.174 55.653z",
    fill: "#D80027"
  }));
}, un = function(e) {
  var t = e.title, r = s(e, Bd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M138 0h377v114H138z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#4A7C3A",
    d: "M138 230h377v114H138z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "none",
    stroke: "#FFF",
    strokeWidth: 10,
    strokeMiterlimit: 2
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M40.3 35.2s37.1 48 50.8 54.5c13.7 6.5 17.1 5.7 17.1 5.7"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M100 35.2S62.9 80.6 53.3 87.6c-9.6 7-18.7 7.8-18.7 7.8m17.1-30.1h37.9M70.7 35.2v30.1"
  })));
}, mn = function(e) {
  var t = e.title, r = s(e, Ld);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M256 256v170.663H0V256h256z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M512 85.337V256H256V85.337h256z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "m128 123.034 11.824 36.389h38.263l-30.955 22.491 11.823 36.389L128 195.813l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "m384 293.697 11.824 36.389h38.263l-30.955 22.491 11.823 36.389L384 366.476l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z"
  }));
}, fn = function(e) {
  var t = e.title, r = s(e, Id);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.331h170.663v341.337H0zm341.337 0H512v341.337H341.337z",
    fill: "#D80027"
  }));
}, vn = function(e) {
  var t = e.title, r = s(e, Od);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M293.991 256c0 20.982-17.01 33.243-37.992 33.243S218.008 276.982 218.008 256s17.01-37.992 37.992-37.992 37.991 17.01 37.991 37.992z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M293.991 256c0 20.982-17.01 37.992-37.992 37.992s-37.992-17.01-37.992-37.992"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M232.259 246.506h9.498v19h-9.498zm37.988 0h9.498v19h-9.498zm-19-14.247h9.498v33.243h-9.498z",
    fill: "#D80027"
  }));
}, pn = function(e) {
  var t = e.title, r = s(e, Rd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M0 85.33h512v341.332"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m204.631 326.488 2.762 8.504h8.941l-7.233 5.255 2.763 8.502-7.233-5.254-7.233 5.254 2.762-8.502-7.233-5.255h8.94zm-22.834-81.622 4.605 14.172h14.901l-12.056 8.757 4.605 14.172-12.055-8.759-12.055 8.759 4.606-14.172-12.056-8.757h14.901zm0 103.883 4.604 14.173h14.902l-12.057 8.757 4.606 14.173-12.055-8.759-12.055 8.759 4.604-14.173-12.054-8.757h14.899zm43.566-66.782 4.606 14.172h14.901l-12.056 8.758 4.605 14.172-12.056-8.759-12.054 8.759 4.606-14.172-12.056-8.758h14.901zm-87.133 0 4.606 14.172h14.899l-12.054 8.758 4.603 14.172-12.054-8.759-12.055 8.759 4.605-14.172-12.055-8.758h14.9z",
    fill: "#FFF"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M376.526 204.163c-7.628-7.628-17.538-12.133-28.189-12.908l31.88-24.795c-12.698-12.698-29.714-18.431-46.319-17.218a44.31 44.31 0 0 0-11.396-19.511l-12.593 25.186a18.47 18.47 0 0 0-3.148-4.197c-7.245-7.245-18.991-7.244-26.234 0s-7.245 18.99 0 26.234a18.536 18.536 0 0 0 4.197 3.148l-25.186 12.593a44.303 44.303 0 0 0 19.519 11.399c-1.217 16.606 4.511 33.619 17.209 46.317L324.12 214.6a11.053 11.053 0 0 1 7.807-3.202c2.973 0 5.768 1.158 7.87 3.26a11.055 11.055 0 0 1 3.26 7.87c0 2.974-1.158 5.768-3.26 7.87l10.494 10.494c4.905-4.905 7.607-11.428 7.607-18.364 0-5.675-1.81-11.071-5.153-15.534a29.492 29.492 0 0 1 13.288 7.662c11.573 11.572 11.573 30.403 0 41.975l10.494 10.494c8.409-8.409 13.039-19.59 13.039-31.481-.001-11.892-4.632-23.072-13.04-31.481z"
  }));
}, gn = function(e) {
  var t = e.title, r = s(e, kd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M512 85.337V256H256L0 85.337z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M512 256v170.663H0L256 256z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m161.908 256-27.288-12.835 14.532-26.428-29.632 5.668-3.755-29.933-20.64 22.015-20.639-22.015-3.755 29.933-29.631-5.669 14.531 26.428L28.343 256l27.288 12.835L41.1 295.263l29.633-5.668 3.753 29.933 20.639-22.015 20.64 22.015 3.755-29.933 29.631 5.669-14.532-26.427zM21.789 117.607l9.081 12.696 14.879-4.714-9.268 12.56 9.081 12.694-14.809-4.932-9.268 12.559.117-15.608-14.809-4.934 14.88-4.712zm0 235.923 9.081 12.696 14.879-4.714-9.268 12.56 9.081 12.695-14.809-4.933-9.268 12.558.117-15.607-14.809-4.934 14.88-4.712zm188.606-117.961-9.081 12.695-14.879-4.713 9.268 12.559-9.081 12.696 14.809-4.933 9.268 12.558-.117-15.607 14.809-4.934-14.88-4.713z",
    fill: "#FFDA44"
  }));
}, $n = function(e) {
  var t = e.title, r = s(e, Vd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m393.508 170.516 17.512 18.875 23.363-10.821-12.541 22.487 17.513 18.876-25.263-4.978-12.539 22.488-3.073-25.564-25.263-4.978 23.363-10.82z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.343h512v341.326H0z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#01411c",
    d: "M128 85.331h384v341.337H128z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M361.909 298.793c-31.037 22.426-74.378 15.446-96.804-15.592-22.427-31.038-15.446-74.379 15.593-96.804 9.677-6.992 20.55-11.125 31.613-12.563-21.283-3.183-43.777 1.613-62.598 15.211-38.2 27.602-46.792 80.944-19.191 119.145 27.601 38.199 80.944 46.792 119.145 19.189 18.82-13.598 30.436-33.448 34.096-54.655-4.839 10.05-12.176 19.076-21.854 26.069zm-1.329-125.904 17.484 18.842 23.322-10.802-12.519 22.447 17.483 18.844-25.219-4.968-12.519 22.45-3.067-25.521-25.22-4.969 23.323-10.802z",
    fill: "#FFF"
  }));
}, En = function(e) {
  var t = e.title, r = s(e, Gd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512V256H0z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 256h512v170.663H0z"
  }));
}, wn = function(e) {
  var t = e.title, r = s(e, jd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 26.666 640 426.666"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("g", {
    fillRule: "evenodd",
    strokeWidth: "1pt"
  }, /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "M0 0h640v480H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00267f",
    d: "M0 0h213.3v480H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f31830",
    d: "M426.7 0H640v480H426.7z"
  })));
}, zn = function(e) {
  var t = e.title, r = s(e, Ud);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ACABB1",
    d: "M400.696 219.822 384 225.387l-16.696-5.565-5.565-13.913 5.565-13.913h33.392l-5.566 13.913z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M345.043 219.822v61.217c0 29.821 38.957 38.957 38.957 38.957s38.957-9.137 38.957-38.957v-61.217h-77.914z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M348.555 295.541C358.131 313.927 384 319.996 384 319.996s25.869-6.069 35.445-24.455L384 236.518l-35.445 59.023z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M422.957 280.421 384 219.822l-38.957 60.599v.618c0 5.518 1.337 10.328 3.512 14.503L384 240.405l35.445 55.137c2.175-4.175 3.512-8.983 3.512-14.503v-.618z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.554l45.167-25.098H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.825V85.333h55.652v48.572l87.43-48.572z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915zm-83.98 0L0 240.259v15.737l100.174-55.652z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915zm83.98 0L256 101.067V85.33l-100.174 55.652z",
    fill: "#D80027"
  }));
}, yn = function(e) {
  var t = e.title, r = s(e, Zd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512V153.6H0zm0 136.526h512v68.263H0zM0 358.4h512v68.263H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m83.477 195.132 15.107 46.498h48.894l-39.554 28.739 15.107 46.499-39.554-28.738-39.555 28.738 15.11-46.499-39.554-28.739H68.37z"
  }));
}, xn = function(e) {
  var t = e.title, r = s(e, Wd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#268024",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#e4312b",
    d: "M256 256.006 0 426.668V85.331z"
  }));
}, Mn = function(e) {
  var t = e.title, r = s(e, Kd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M196.641 85.337v341.326H0V85.337z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFDA44",
    cx: 196.641,
    cy: 256,
    r: 64
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M160.638 224v40.001c0 19.882 16.118 36 36 36s36-16.118 36-36V224h-72z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M196.638 276c-6.617 0-12-5.383-12-12v-16h24.001v16c-.001 6.616-5.385 12-12.001 12z"
  }));
}, Fn = function(e) {
  var t = e.title, r = s(e, Yd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFDA44",
    cx: 218.902,
    cy: 255.994,
    r: 74.207
  }));
}, Hn = function(e) {
  var t = e.title, r = s(e, Jd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "m289.579 216.738-12.592 12.592c5.37 5.372 8.693 12.792 8.693 20.988 0 16.392-13.289 29.68-29.68 29.68-16.392 0-29.68-13.289-29.68-29.68 0-8.195 3.322-15.616 8.693-20.988l-12.592-12.592c-8.594 8.594-13.91 20.466-13.91 33.579 0 26.228 21.261 47.489 47.489 47.489s47.489-21.261 47.489-47.489c0-13.112-5.316-24.985-13.91-33.579z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m256 232.51 4.421 13.605h14.304l-11.573 8.408 4.421 13.604L256 259.719l-11.573 8.408 4.421-13.604-11.573-8.408h14.304z"
  }));
}, bn = function(e) {
  var t = e.title, r = s(e, Xd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#751A46",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0v342h150.3l37.7-19.6-37.7-18.9 37.7-19-37.7-18.9 37.7-19-37.7-19 37.7-18.9-37.7-19 37.7-19-37.7-18.9 37.7-19-37.7-18.9 37.7-19-37.7-19L188 57l-37.7-19L188 19.1 150.3 0z"
  }));
}, Cn = function(e) {
  var t = e.title, r = s(e, Qd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 26.666 640 426.666"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("g", {
    fillRule: "evenodd",
    strokeWidth: "1pt"
  }, /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "M0 0h640v480H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00267f",
    d: "M0 0h213.3v480H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f31830",
    d: "M426.7 0H640v480H426.7z"
  })));
}, _n = function(e) {
  var t = e.title, r = s(e, qd);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.331h170.663v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M341.337 85.331H512v341.337H341.337z"
  }));
}, Nn = function(e) {
  var t = e.title, r = s(e, e9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 312.882h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M129.468 181.793v85.136c0 48.429 63.267 63.267 63.267 63.267S256 315.356 256 266.929v-85.136H129.468z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M155.634 196.634h74.201v-29.681l-14.841 7.42-22.261-22.26-22.259 22.26-14.84-7.42zm85.526 82.148-48.231-48.231-48.231 48.231 15.741 15.74 32.49-32.49 32.49 32.49z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M241.16 233.734h-22.504a14.74 14.74 0 0 0 2.001-7.418c0-8.196-6.645-14.84-14.84-14.84-5.663 0-10.581 3.172-13.083 7.836-2.502-4.663-7.421-7.836-13.083-7.836-8.195 0-14.84 6.644-14.84 14.84 0 2.706.736 5.235 2.001 7.418h-22.114c0 8.196 7.139 14.84 15.334 14.84h-.494c0 8.196 6.644 14.84 14.84 14.84 0 7.257 5.211 13.286 12.094 14.576l-11.694 26.401a48.075 48.075 0 0 0 18.149 3.544 48.079 48.079 0 0 0 18.149-3.544l-11.694-26.401c6.883-1.29 12.094-7.319 12.094-14.576 8.196 0 14.84-6.644 14.84-14.84h-.494c8.199 0 15.338-6.644 15.338-14.84z"
  }));
}, An = function(e) {
  var t = e.title, r = s(e, t9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.33v341.332h512V85.33z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.333h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 312.884h512v113.775H0z"
  }));
}, Dn = function(e) {
  var t = e.title, r = s(e, a9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 255.994h512v81.619H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 337.614h512v89.043H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m278.261 185.209 20.844 9.804-11.099 20.186 22.632-4.33 2.868 22.865 15.765-16.816 15.766 16.816 2.867-22.865 22.633 4.33-11.099-20.186 20.843-9.804-20.844-9.805 11.1-20.185-22.633 4.329-2.868-22.864-15.765 16.816-15.766-16.816-2.867 22.864-22.634-4.329 11.1 20.187z"
  }));
}, Pn = function(e) {
  var t = e.title, r = s(e, n9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#055e1c",
    d: "M0 85.333h512v341.333H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M183.548 289.386c0 12.295 9.731 22.261 21.736 22.261h65.208c0 10.244 8.11 18.551 18.114 18.551h21.736c10.004 0 18.114-8.306 18.114-18.551v-22.261H183.548zm146.716-107.595v51.942c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942h-21.735zm-155.773 51.943c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942H174.49v51.942z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M297.661 181.788h21.736v51.942h-21.736zm-32.604 29.685c0 2.046-1.625 3.71-3.623 3.71-1.998 0-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 2.046-1.625 3.71-3.623 3.71s-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 14.32 11.376 25.971 25.358 25.971 5.385 0 10.38-1.733 14.491-4.677 4.11 2.944 9.106 4.677 14.491 4.677 1.084 0 2.15-.078 3.2-.215-1.54 6.499-7.255 11.345-14.068 11.345v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.943h-21.736l.002 29.682z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M207.093 248.57h32.601v22.261h-32.601z"
  })));
}, Sn = function(e) {
  var t = e.title, r = s(e, r9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 426.663V85.329h512"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 396.494v30.169h45.255L512 115.499v-30.17h-45.255z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m85.688 108.787 5.12 15.756h16.566l-13.403 9.737 5.12 15.757-13.403-9.738-13.405 9.738 5.12-15.757L64 124.543h16.567zm84.624 0 5.121 15.756H192l-13.403 9.737 5.12 15.757-13.405-9.738-13.403 9.738 5.12-15.757-13.403-9.737h16.566zm-84.624 82.502 5.12 15.756h16.566l-13.403 9.738 5.12 15.757-13.403-9.739-13.405 9.739 5.12-15.757L64 207.045h16.567zm84.624 0 5.121 15.756H192l-13.403 9.738 5.12 15.757-13.405-9.739-13.403 9.739 5.12-15.757-13.403-9.738h16.566zM128 150.037l5.12 15.756h16.568l-13.405 9.738 5.12 15.758L128 181.55l-13.403 9.739 5.12-15.758-13.405-9.738h16.568z",
    fill: "#FFF"
  }));
}, Tn = function(e) {
  var t = e.title, r = s(e, l9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M235.454 85.337 0 426.663 427.345 85.337z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M512 329.393 0 426.663h512z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M512 85.337h-84.655L0 426.663l512-204.512z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337v341.326L235.454 85.337z"
  }));
}, Bn = function(e) {
  var t = e.title, r = s(e, i9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 426.668V85.331l256 170.675z"
  }));
}, Ln = function(e) {
  var t = e.title, r = s(e, d9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M192 85.33h-64v138.666H0v64h128v138.666h64V287.996h320v-64H192z"
  }));
}, In = function(e) {
  var t = e.title, r = s(e, c9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512V256H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M83.478 170.666c0-24.865 17.476-45.637 40.812-50.734a52.059 52.059 0 0 0-11.13-1.208c-28.688 0-51.942 23.254-51.942 51.941s23.255 51.942 51.942 51.942c3.822 0 7.543-.425 11.13-1.208-23.336-5.095-40.812-25.867-40.812-50.733zm66.783-48.231 3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m121.344 144.696 3.683 11.337h11.921l-9.645 7.007 3.684 11.337-9.643-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921zm57.834 0 3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.685-11.337-9.645-7.007h11.921zm-11.131 33.391 3.684 11.337h11.921l-9.644 7.007 3.684 11.337-9.645-7.006-9.643 7.006 3.684-11.337-9.644-7.007h11.92zm-35.573 0 3.683 11.337h11.921l-9.644 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.684-11.337-9.644-7.007h11.92z"
  })));
}, On = function(e) {
  var t = e.title, r = s(e, s9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h512v341.3H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 170.7v-15.1l57.4-38.2H80zm256 0v-15.1l-57.4-38.2H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#29DBFF",
    d: "M449 139.7c-.1 44.4-7.2 92.1-65 114.9-57.8-22.8-64.9-70.5-65-114.9h130z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffda44",
    d: "M449 139.7c0-16.7-.9-32.9-.5-47.1C426.9 83 398.4 81 383.9 81s-42.9 2-64.6 11.6c.4 14.2-.5 30.4-.5 47.1H449z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#BF521B",
    d: "m369.5 204.5.3 10.3-12.8.2 4.9 13.2h-17.3c-18-20.2-23.4-42.4-24.9-68.1l9.1-9.7 8.3 14.3 10.8-12.8 7 7.8.8 15.7 13.8 29.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#474747",
    d: "m436.6 192.5-8.6 18.3h-47l-29.2-19.5 25.7 10.5h25.1l3.7-6.5 7.2.2 2-3z"
  }));
}, Rn = function(e) {
  var t = e.title, r = s(e, o9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 199.112h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l-.145-44.188 89.043-.266.146 44.454z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l-.145-44.188 89.043-.266.146 44.454z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l14.848 14.837 29.674-22.261 29.685 22.261 14.837-14.837z"
  }));
}, kn = function(e) {
  var t = e.title, r = s(e, h9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M512 295.883H202.195v130.783h-79.76V295.883H0v-79.772h122.435V85.329h79.76v130.782H512v61.218z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z"
  }));
}, Vn = function(e) {
  var t = e.title, r = s(e, u9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 196.641h512v118.717H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 315.359h512v111.304H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M129.468 181.799v85.136c0 48.429 63.267 63.267 63.267 63.267S256 315.362 256 266.935v-85.136H129.468z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M146.126 184.294v81.941c0 5.472 1.215 10.64 3.623 15.485h85.97c2.408-4.844 3.623-10.012 3.623-15.485v-81.941h-93.216z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M221.301 241.427h-21.425v-14.283h14.284v-14.283h-14.284v-14.284h-14.283v14.284h-14.282v14.283h14.282v14.283h-21.426v14.284h21.426v14.283h14.283v-14.283h21.425z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M169.232 301.658c9.204 5.783 18.66 9.143 23.502 10.636 4.842-1.494 14.298-4.852 23.502-10.636 9.282-5.833 15.79-12.506 19.484-19.939a24.878 24.878 0 0 0-14.418-4.583c-1.956 0-3.856.232-5.682.657-3.871-8.796-12.658-14.94-22.884-14.94-10.227 0-19.013 6.144-22.884 14.94a25.048 25.048 0 0 0-5.682-.657 24.88 24.88 0 0 0-14.418 4.583c3.691 7.433 10.198 14.106 19.48 19.939z"
  }));
}, Gn = function(e) {
  var t = e.title, r = s(e, m9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 312.888h512v113.775H0z"
  }));
}, jn = function(e) {
  var t = e.title, r = s(e, f9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.34h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M512 85.334v166.69L0 256.175V85.334z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M323.744 203.099 256 270.843l-67.744-67.744a81.156 81.156 0 0 0-13.879 45.483v22.261c0 35.744 23.097 66.193 55.148 77.213-4.277 8.385-3.556 18.848 2.712 26.671l24.258-19.439 24.258 19.439c6.342-7.915 7.011-18.534 2.564-26.968 31.614-11.261 54.308-41.485 54.308-76.916v-22.261a81.174 81.174 0 0 0-13.881-45.483z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M256 330.206c-32.732 0-59.362-26.63-59.362-59.362v-22.261c0-32.733 26.63-59.363 59.362-59.363s59.362 26.63 59.362 59.362v22.261c0 32.733-26.63 59.363-59.362 59.363z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M293.101 270.843v-22.261c0-20.458-16.643-37.101-37.101-37.101s-37.101 16.643-37.101 37.101v22.261L256 278.264l37.101-7.421z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M218.899 270.843c0 20.458 16.643 37.101 37.101 37.101s37.101-16.643 37.101-37.101h-74.202z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M300.522 189.22c0-12.295-9.966-22.261-22.261-22.261a22.173 22.173 0 0 0-14.84 5.672v-13.093h7.421v-14.84h-7.421v-7.421h-14.84v7.421h-7.421v14.84h7.421v13.093a22.177 22.177 0 0 0-14.841-5.672c-12.295 0-22.261 9.966-22.261 22.261 0 6.591 2.867 12.512 7.421 16.589v13.093h74.203v-13.093c4.552-4.077 7.419-9.997 7.419-16.589z"
  }));
}, Un = function(e) {
  var t = e.title, r = s(e, v9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M330.207 85.331H512v341.337H330.207z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.331h181.793v341.337H0zm255.999 111.301 14.733 45.347h47.685l-38.576 28.029 14.734 45.348-38.576-28.026-38.577 28.026 14.737-45.348-38.576-28.029h47.681z",
    fill: "#496E2D"
  }));
}, Zn = function(e) {
  var t = e.title, r = s(e, p9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m256 157.273 22.663 69.748H352l-59.332 43.106 22.664 69.749L256 296.769l-59.332 43.107 22.664-69.749L160 227.021h73.337z"
  }));
}, Wn = function(e) {
  var t = e.title, r = s(e, g9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M0 196.636h512v118.728H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 352.462h512v74.207H0zM0 85.331h512v74.207H0z",
    fill: "#6DA544"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m256.742 218.003 9.43 29.021h30.518L272 264.963l9.431 29.023-24.689-17.937-24.689 17.937 9.431-29.023-24.69-17.939h30.518z"
  }));
}, Kn = function(e) {
  var t = e.title, r = s(e, $9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 322.783h512v103.88H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v104.515H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M0 210.877h512v89.656H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m73.178 209.188 20.831 29.067 34.084-10.83-21.207 28.795 20.83 29.069-33.939-11.271-21.208 28.794.234-35.762-33.94-11.273 34.083-10.83z"
  }));
}, Yn = function(e) {
  var t = e.title, r = s(e, E9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
    fill: "#6DA544"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m302.049 226.318 7.368 22.674h23.842l-19.288 14.016 7.366 22.674-19.288-14.015-19.287 14.015 7.366-22.674-19.288-14.016h23.842zm74.203 0 7.367 22.674h23.842l-19.288 14.016 7.367 22.674-19.288-14.015-19.288 14.015 7.367-22.674-19.288-14.016h23.842z"
  }));
}, Jn = function(e) {
  var t = e.title, r = s(e, w9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
    fill: "#0052B4"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M228.582 261.936 256 214.447l27.418 47.489z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M291.616 277.616 256 295.425l-35.616-17.809v-23.744h71.232z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m289.579 216.485-12.592 12.592c5.37 5.372 8.693 12.791 8.693 20.988 0 16.392-13.289 29.68-29.68 29.68-16.392 0-29.68-13.289-29.68-29.68 0-8.195 3.322-15.616 8.693-20.988l-12.592-12.592c-8.594 8.594-13.91 20.466-13.91 33.579 0 26.228 21.261 47.489 47.489 47.489s47.489-21.261 47.489-47.489c0-13.114-5.316-24.987-13.91-33.579z"
  }));
}, Xn = function(e) {
  var t = e.title, r = s(e, z9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M512 85.331v166.69L0 256.173V85.331z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFDA44"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M59.621 256a59.546 59.546 0 0 0-.193 4.57c0 32.821 26.607 59.429 59.429 59.429s59.429-26.607 59.429-59.429c0-1.539-.078-3.061-.193-4.57H59.621z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 118.862,
    cy: 210.287,
    r: 18.286
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M77.715 205.714v59.429c0 31.494 41.144 41.143 41.144 41.143s41.144-9.649 41.144-41.143v-59.429H77.715z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M118.877 287.148c-7.632-2.746-22.876-9.767-22.876-22.006v-41.144h45.715v41.144c-.001 12.28-15.244 19.283-22.839 22.006z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#F3F3F3",
    d: "M128.001 246.856v-9.142l-9.144-4.571-9.142 4.571v9.142l-4.571 4.573v18.285h27.428v-18.285z"
  }));
}, Qn = function(e) {
  var t = e.title, r = s(e, y9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 312.882h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m187.31 215.184 9.208 28.341h29.802l-24.11 17.518 9.209 28.342-24.109-17.516-24.11 17.516 9.209-28.342-24.109-17.518h29.801zm137.38 0 9.209 28.341H363.7l-24.109 17.518 9.209 28.342-24.11-17.516-24.109 17.516 9.209-28.342-24.11-17.518h29.802z",
    fill: "#6DA544"
  }));
}, qn = function(e) {
  var t = e.title, r = s(e, x9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#2B5DEA",
    d: "M0 0h900v600H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDF29",
    d: "M0 100h900v400H0V100z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D70000",
    d: "M0 150h900v300H0V150z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M450 171.4v257.2c114.3 0 171.4-85.7 214.3-128.6-42.9-42.9-100-128.6-214.3-128.6z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M450 171.4c-100 0-171.4 85.7-214.3 128.6C278.6 342.9 350 428.6 450 428.6V171.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M346.3 254.3h21v91.3h-21zm51.9 0h21v91.3h-21z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M477.8 254.3h21v91.3h-21zm51.9 0h21v91.3h-21z"
  }));
}, er = function(e) {
  var t = e.title, r = s(e, M9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h512v341.3H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 170.7v-15.1l57.4-38.2H80zm256 0v-15.1l-57.4-38.2H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#29DBFF",
    d: "M448.9 169.5c0 9.6-.3 29.6-1.4 39.2-4.1 34.9-23.5 68.8-62.1 85.9-45.3-17.9-60.8-51-64.9-85.9-1.1-9.6-1.5-19.4-1.5-29l.3-47.1h129.2l.4 36.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M447.5 208.7c-.2 1.6-.4 3.3-.6 4.9-4.8 33.1-22.9 65.4-61.5 81-43.2-17-59.4-47.9-64.2-81-.2-1.6-.4-3.2-.6-4.9"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#29DBFF",
    d: "m385.4 251.7-22.9-43h45.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m385.4 165.8-22.9 42.9h45.8z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#FFBE57",
    cx: 474.8,
    cy: 236.8,
    rx: 16.8,
    ry: 43.3
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#FFBE57",
    cx: 295.3,
    cy: 236.8,
    rx: 16.8,
    ry: 43.3
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m385.4 31.5-33.4 44h68.5zM315.5 280s33.8 29.5 69.9 29.5 67.1-29.5 67.1-29.5l8.5 14.6S439.2 326 385.4 326 307 294.6 307 294.6l8.5-14.6z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#A5A5A5",
    cx: 386.3,
    cy: 104.3,
    rx: 34.3,
    ry: 23.3
  }));
}, tr = function(e) {
  var t = e.title, r = s(e, F9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M332.058 191.996v78.221c0 38.103 51.942 49.779 51.942 49.779s51.942-11.675 51.942-49.779v-78.221H332.058z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M376.579 220.44c0 7.855-6.644 28.445-14.84 28.445s-14.84-20.589-14.84-28.445c0-7.856 14.84-14.222 14.84-14.222s14.84 6.367 14.84 14.222z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M415.961 235.93c2.394-5.6 4.257-13.785 4.257-17.86 0-6.546-8.904-11.852-8.904-11.852s-8.904 5.306-8.904 11.852c0 4.075 1.862 12.26 4.257 17.86l-5.141 11.123a26.898 26.898 0 0 0 9.788 1.831c3.463 0 6.766-.654 9.788-1.831l-5.141-11.123z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M372.87 270.217s-7.421 14.222-7.421 28.445h37.101c0-14.222-7.421-28.445-7.421-28.445l-11.13-7.111-11.129 7.111z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M395.13 270.217v-3.555c0-5.891-4.983-10.666-11.13-10.666-6.147 0-11.13 4.776-11.13 10.666v3.555h22.26z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.554l45.167-25.098H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.825V85.333h55.652v48.572l87.43-48.572z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915zm-83.98 0L0 240.259v15.737l100.174-55.652z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915zm83.98 0L256 101.067V85.33l-100.174 55.652z",
    fill: "#D80027"
  }));
}, ar = function(e) {
  var t = e.title, r = s(e, H9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.331h170.663v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M341.337 85.331H512v341.337H341.337z"
  }));
}, nr = function(e) {
  var t = e.title, r = s(e, b9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h21v15H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#073AB6",
    d: "M0 0h22.5v15H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h11.3v7.5H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#F44653",
    d: "M7.1 0h3.6v7H7.1V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1035BB",
    d: "M0 0h3.6v7H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M3.6 0h3.6v7H3.6V0zm10.9 6h5L19 7h-1.5v.5h1l-.5 1h-.5V10h-1V7H15l-.5-1zm4 2.5 1 1.5h-2l1-1.5zm-3 0 1 1.5h-2l1-1.5zm1.5 3L16 10h2l-1 1.5zM20 8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm-6 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm1 4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm4 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm-2 1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z"
  }));
}, rr = function(e) {
  var t = e.title, r = s(e, C9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512V153.6H0zM0 358.4h512v68.263H0zm0-136.537h512v68.263H0z",
    fill: "#496E2D"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h204.054v204.054H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m102.026 133.938 13.26 40.812h42.916l-34.718 25.226 13.26 40.814-34.718-25.224-34.719 25.224 13.263-40.814-34.718-25.226h42.913z"
  }));
}, lr = function(e) {
  var t = e.title, r = s(e, _9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.334h512V426.66H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 194.056h512v123.882H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.334h512v54.522H0zm0 286.809h512v54.522H0z",
    fill: "#D80027"
  }));
}, ir = function(e) {
  var t = e.title, r = s(e, N9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M226.318 300.522h59.364v-25.23l-11.873 5.937L256 263.421l-17.809 17.808-11.873-5.937zm-33.963-29.682 2.763 8.504h8.94l-7.233 5.255 2.763 8.502-7.233-5.255-7.234 5.255 2.763-8.502-7.233-5.255h8.94zm8.566-29.68 2.763 8.502h8.94l-7.233 5.255 2.763 8.504-7.233-5.256-7.234 5.256 2.763-8.504-7.233-5.255h8.94zm24.488-22.261 2.763 8.502h8.94l-7.233 5.255 2.763 8.504-7.233-5.256-7.234 5.256 2.763-8.504-7.233-5.255h8.94zm94.236 51.941-2.763 8.504h-8.94l7.233 5.255-2.763 8.502 7.233-5.255 7.234 5.255-2.763-8.502 7.233-5.255h-8.94zm-8.566-29.68-2.763 8.502h-8.94l7.233 5.255-2.763 8.504 7.233-5.256 7.234 5.256-2.763-8.504 7.233-5.255h-8.94zm-24.488-22.261-2.763 8.502h-8.94l7.233 5.255-2.763 8.504 7.233-5.256 7.234 5.256-2.763-8.504 7.233-5.255h-8.94zM256 207.767l2.763 8.503h8.941l-7.234 5.256 2.763 8.502-7.233-5.254-7.233 5.254 2.763-8.502-7.234-5.256h8.941z",
    fill: "#FFDA44"
  }));
}, dr = function(e) {
  var t = e.title, r = s(e, A9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m210.715 174.377 3.684 11.338h11.919l-9.643 7.006 3.684 11.337-9.644-7.007-9.644 7.007 3.684-11.337-9.645-7.006h11.921zm-93.899 107.594 4.605 14.172h14.9l-12.055 8.757 4.606 14.173-12.056-8.76-12.055 8.76 4.604-14.173-12.054-8.757h14.899zm27.88-162.292 4.604 14.172h14.901l-12.056 8.758 4.606 14.171-12.055-8.759-12.056 8.759 4.606-14.171-12.055-8.758h14.9zm-75.157 55.652 4.604 14.172h14.9l-12.055 8.758 4.606 14.171-12.055-8.758-12.056 8.758 4.606-14.171-12.055-8.758h14.9z",
    fill: "#FFF"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M483.386 354.503H117.801s109.234-88.562 310.593-220.938c.001 0-88.443 128.935 54.992 220.938zm-365.585 11.586c-11.177 0-11.195 17.37 0 17.37h365.585c11.177 0 11.195-17.37 0-17.37H117.801z",
    fill: "#FFDA44"
  }));
}, cr = function(e) {
  var t = e.title, r = s(e, D9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M256 256 0 90.691v44.242L155.826 256 0 377.067v44.242z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 90.691v330.618L189.217 256z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m44.184 213.36 24.912 23.577 30.121-16.41-14.723 30.98 24.911 23.575-34.012-4.43L60.67 301.63l-6.296-33.716-34.012-4.43 30.119-16.408z"
  }));
}, sr = function(e) {
  var t = e.title, r = s(e, P9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M357.208 183.679c8.397-23.404-1.036-48.858-21.281-61.536a52.131 52.131 0 0 1 10.884 2.621c27.002 9.688 41.038 39.428 31.35 66.431s-39.428 41.038-66.431 31.35a52.182 52.182 0 0 1-10.069-4.895c23.686 3.084 47.15-10.566 55.547-33.971zm-46.571-67.95-7.297 9.427-11.22-4.026 6.712 9.852-7.296 9.427 11.443-3.338 6.712 9.852.361-11.914 11.444-3.339-11.221-4.025z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m330.338 146.448-7.296 9.427-11.221-4.026 6.712 9.852-7.296 9.427 11.443-3.339 6.712 9.853.36-11.915 11.445-3.34-11.221-4.024zM275.9 126.916l-7.296 9.427-11.219-4.024 6.711 9.851-7.296 9.426 11.443-3.338 6.712 9.852.361-11.915 11.444-3.337-11.221-4.027zm-.799 35.189-7.296 9.427-11.221-4.026 6.712 9.852-7.296 9.427 11.444-3.338 6.711 9.852.362-11.915 11.443-3.338-11.22-4.026zm33.484 12.013-7.296 9.427-11.22-4.026 6.712 9.853-7.297 9.426 11.444-3.338 6.712 9.852.36-11.915 11.443-3.338-11.219-4.025z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M83.478 85.337h89.043v341.326H83.478z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m117.458 175.191-14.908-11.105v-15.705l14.908-11.105h21.084l14.908 11.105v15.705l-14.908 11.105z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M128 137.276h-10.542l-14.908 11.105v7.678H128zm0 37.915h10.542l14.908-11.105v-8.012H128z",
    fill: "#FF9811"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m117.458 374.725-14.908-11.106v-15.704l14.908-11.105h21.084l14.908 11.105v15.704l-14.908 11.106z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M128 336.81h-10.542l-14.908 11.105v7.678H128zm0 37.915h10.542l14.908-11.106v-8.011H128z",
    fill: "#FF9811"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m117.458 274.957-14.908-11.105v-15.703l14.908-11.106h21.084l14.908 11.106v15.703l-14.908 11.105zm36.513 24.434h-6.493v-6.493h-11.411l-8.068-8.068-8.067 8.068h-11.41v6.493h-6.493v12.986h6.493v6.492h11.41l8.068 8.069 8.068-8.069h11.41v-6.492h6.493zm0-99.768h-6.493v-6.492h-11.411l-8.068-8.069-8.067 8.069h-11.41v6.492h-6.493v12.986h6.493v6.492h11.41l8.068 8.07 8.068-8.07h11.41v-6.492h6.493z",
    fill: "#496E2D"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M120.576 248.576h14.84v14.84h-14.84z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 128,
    cy: 206.113,
    r: 7.421
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 128,
    cy: 305.887,
    r: 7.421
  })));
}, or = function(e) {
  var t = e.title, r = s(e, S9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 256,
    cy: 255.994,
    r: 96
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m267.826 219.291 16.47 22.695 26.673-8.649-16.496 22.676 16.468 22.695-26.664-8.681-16.495 22.676.017-28.04-26.664-8.682 26.674-8.648z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M277.818 312.724c-31.33 0-56.727-25.397-56.727-56.727s25.397-56.727 56.727-56.727c9.769 0 18.96 2.47 26.985 6.819-12.589-12.31-29.804-19.909-48.803-19.909-38.558 0-69.818 31.259-69.818 69.818s31.26 69.818 69.818 69.818c18.999 0 36.215-7.599 48.803-19.909-8.026 4.347-17.216 6.817-26.985 6.817z"
  })));
}, hr = function(e) {
  var t = e.title, r = s(e, T9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.331h256v170.663H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M141.357 157.303V130.59h-26.714v26.713H87.93v26.713h26.713v26.713h26.714v-26.713h26.713v-26.713z"
  }));
}, ur = function(e) {
  var t = e.title, r = s(e, B9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#E30A17",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M259.7 118.6c-13.1-9.5-29-14.6-45.3-14.5-40.8 0-73.8 30.8-73.8 68.9s33.1 68.9 73.8 68.9c17.1 0 32.9-5.4 45.3-14.5-30 38.6-85.7 45.6-124.3 15.5s-45.6-85.7-15.5-124.3 85.7-45.6 124.3-15.5c5.8 4.5 11 9.8 15.5 15.5zm39.9 65.8-18.1 21.9 1.2-28.4-26.4-10.4 27.3-7.6 1.8-28.3 15.6 23.7 27.5-7.1-17.5 22 15.3 23.9-26.7-9.7z"
  }));
}, mr = function(e) {
  var t = e.title, r = s(e, L9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m6.066 85.337 207.961 212.636 131.584 128.69h160.323L297.973 214.027 166.389 85.337z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M43.364 85.337 384.69 426.663h83.946L127.31 85.337z"
  }));
}, fr = function(e) {
  var t = e.title, r = s(e, I9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h900v600H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00B2EE",
    d: "M0 300h450V0h450v600H0V300z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m345.3 480.9 29.4 90.6-77.1-56H393l-77.1 56 29.4-90.6zM706.4 340l29.4 90.6-77.1-56H754l-77.1 56 29.5-90.6zm106.4-78.5 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zm0-224.1 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M449.9 0v206.3h-81l81 54V300h-39.7l-129-85.9V300H168.7v-85.9L39.7 300H0v-39.7l81-54H0V93.8h81L0 39.9V0h39.7l129 85.9V0h112.5v85.9L410.2 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M253.1 0h-56.3v122H0v56.2h196.8V300h56.3V178.2h196.8V122H253.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M449.9 39.9v53.9h-81z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 300v-19.3l109.9-74.4h39.7L12.8 300zM12.8.1l136.8 93.7h-39.7L0 19.4V.1zm437.1.1v19.3L340 93.8h-39.7L437.1.2zM437.1 300l-136.8-93.7H340l109.9 74.4V300z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m719.9 131.6 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM584 187.7l29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zm30 242.9 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM488 332l29.4 90.6-77.1-56h95.3l-77.1 56L488 332zm0 132 29.4 90.6-77.1-56h95.3l-77.1 56L488 464z"
  }));
}, vr = function(e) {
  var t = e.title, r = s(e, O9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337h256V256H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M186.435 170.669 162.558 181.9l12.714 23.125-25.927-4.961-3.286 26.192L128 206.993l-18.06 19.263-3.285-26.192-25.927 4.96 12.714-23.125-23.877-11.23 23.877-11.231-12.714-23.125 25.927 4.96 3.286-26.192L128 134.344l18.06-19.263 3.285 26.192 25.928-4.96-12.715 23.125z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#0052B4",
    cx: 128,
    cy: 170.674,
    r: 29.006
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M128 190.06c-10.692 0-19.391-8.7-19.391-19.391 0-10.692 8.7-19.391 19.391-19.391 10.692 0 19.391 8.7 19.391 19.391 0 10.691-8.699 19.391-19.391 19.391z"
  }));
}, pr = function(e) {
  var t = e.title, r = s(e, R9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 426.663V85.337h512"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M512 152.222V85.337H411.67L0 359.778v66.885h100.33z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z"
  }));
}, gr = function(e) {
  var t = e.title, r = s(e, k9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.337h512V256H0z"
  }));
}, $r = function(e) {
  var t = e.title, r = s(e, V9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#232323",
    d: "M0 0h512v341.3H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 56.9h512v56.9H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D32300",
    d: "M0 113.8h512v56.9H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 227.6h512v56.9H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D32300",
    d: "M0 284.4h512v56.9H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 256,
    cy: 170.7,
    r: 80.7
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M234.5 127.5c.9-1.4-19.6-2-19.6-2 1.7-2.5 18.4-10.5 18.4-10.5s-.9-6 2.7-9.8l-4.5-9.8s7-3.4 18.4-3.4 19.9 7 21 13.1l-6.4 3.4c-.1 4.7 1.7 11.6-4.3 17.3-5.9 5.7-8.3 6.9-8.5 18.8 0 3.9 2.3 8.2 8.8 11.7 17.4 9.3 38.6 28.2 44.6 33.9 6.1 5.7 5.1 19.2 2.6 25.2s-12.1 14.3-14.3 13.6c-2.2-.6 1.2-9.2-3.5-11.6 0 0-8.9-7.6-16.8.6s-.2 25.2 3.9 28c4.1 2.8 1.7 5-1.9 5H247c-3.8 0-5.4-2.3-1.9-5 7.6-3.8 12.4-15.3 7.4-20.3-4.9-4.9-18.3 1.5-21.5 6.3-2.8 2.8-8.8 3.6-12.9-1.4s-4.1-10.4-1.1-12.5c7-4.8 0 0 .1-.1 0 0 11.9-8.6 29.9-9 3.9 0 4.8-2.2 2.2-4.8 0 0-30.9-27.4-28.1-44.2 3-18.3 20-26.3 13.4-32.5-1.3-1.8 0 0 0 0z"
  }));
}, Er = function(e) {
  var t = e.title, r = s(e, G9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M0 0h256.5v184.1H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z",
    fill: "#FFF"
  }));
}, wr = function(e) {
  var t = e.title, r = s(e, j9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M0 0h256.5v184.1H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z",
    fill: "#FFF"
  }));
}, zr = function(e) {
  var t = e.title, r = s(e, U9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 38h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0z",
    fill: "#0038a8"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h256.5v190H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FED443",
    d: "m128.3 138.7-15.1 22.6-3.8-26.9L86 148.2l8.2-25.9-27.2 2.2 18.6-19.8L60.3 95l25.4-9.7L67 65.5l27.1 2.3-8.2-25.9 23.4 13.8 3.9-26.9 15.1 22.6 15.1-22.6 3.8 26.9 23.4-13.8-8.2 25.9 27.1-2.2-18.6 19.8 25.4 9.7-25.4 9.7 18.6 19.8-27.1-2.2 8.2 25.9-23.4-13.8-3.9 26.9-15-22.7zm0-.5c23.9.9 44-17.6 44.9-41.5.9-23.9-17.6-44-41.5-44.9h-3.4c-23.9.8-42.6 20.8-41.8 44.6.6 22.8 19 41.1 41.8 41.8zm0-10.6c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.3 34-34 34z"
  }));
}, yr = function(e) {
  var t = e.title, r = s(e, Z9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 322.783h512v103.88H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.337h512v104.515H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 210.877h512v89.656H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.337h512v104.515H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M188.688 137.589c0-15.984 11.234-29.339 26.236-32.614a33.531 33.531 0 0 0-7.155-.777c-18.442 0-33.391 14.949-33.391 33.391s14.949 33.391 33.391 33.391c2.458 0 4.85-.273 7.155-.777-15.002-3.275-26.236-16.63-26.236-32.614zm45.97 15.177 2.261 6.957h7.315l-5.918 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.261-6.956-5.918-4.301h7.315zm23.348 0 2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zm23.347 0 2.26 6.957h7.315l-5.917 4.301 2.26 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.918-4.301h7.315zm23.347 0 2.262 6.957h7.315l-5.919 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.262-6.956-5.919-4.301h7.314zm23.348 0 2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zm-70.042-24.284 2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zm23.347 0 2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.918-4.3h7.315zm23.347 0 2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.299-5.918 4.299 2.262-6.957-5.919-4.3h7.314zm23.348 0 2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zm-46.695-24.284 2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.918-4.3h7.315zm23.347 0 2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.3-5.918 4.3 2.262-6.957-5.919-4.3h7.314zm23.348 0 2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.917-4.3h7.314z",
    fill: "#FFF"
  }));
}, xr = function(e) {
  var t = e.title, r = s(e, W9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 85.331h256v341.337H256z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ACABB1",
    d: "m321.353 233.837 32.073 42.43c-5.053 7.651-5.026 17.961.817 25.692 7.414 9.807 21.374 11.748 31.182 4.335 9.807-7.414 11.748-21.374 4.334-31.182-5.843-7.731-15.756-10.568-24.495-7.795l-49.988-66.129-11.838 8.949-17.759 13.424 17.899 23.677 17.775-13.401zm46.175 48.78a7.421 7.421 0 1 1 8.95 11.84 7.421 7.421 0 0 1-8.95-11.84z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m376.367 247.24 17.899-23.677-17.759-13.424-11.838-8.949-49.988 66.129c-8.74-2.775-18.651.063-24.495 7.795-7.414 9.808-5.473 23.768 4.334 31.182 9.808 7.414 23.768 5.473 31.182-4.335 5.845-7.731 5.871-18.041.817-25.692l32.073-42.43 17.775 13.401zm-62.504 45.771a7.42 7.42 0 1 1-11.84-8.95 7.42 7.42 0 0 1 11.84 8.95z"
  }));
}, Mr = function(e) {
  var t = e.title, r = s(e, K9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.331h170.663v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M341.337 85.331H512v341.337H341.337zM214.261 283.82l-33.393-50.086 33.392-50.087 33.392 50.087zm83.478 0-33.391-50.086 33.391-50.087 33.393 50.087zM256 350.603l-33.391-50.087L256 250.429l33.391 50.087z",
    fill: "#6DA544"
  }));
}, Fr = function(e) {
  var t = e.title, r = s(e, Y9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFCE00",
    d: "M0 0h22.5v5H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#203899",
    d: "M0 5h22.5v5H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D82B2B",
    d: "M0 10h22.5v5H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m12.13 5.38.14.46.45.14-.39.27.01.48-.38-.29-.45.15.15-.44-.28-.38h.47zm-1.77 0 .27.39h.47l-.28.38.15.45-.45-.16-.38.28.01-.47-.39-.28.45-.13zm3.44.56-.01.48.39.27-.46.14-.14.45-.27-.38h-.48l.29-.38-.15-.45.45.16zm-5.11.02.4.27.44-.18-.13.46.3.36-.47.02-.26.4-.16-.44-.46-.12.37-.3zm6.55 1.17-.2.44.25.4-.47-.05-.31.36-.1-.46-.43-.18.41-.24.03-.47.35.31zm.19 1.12.21.43.47.07-.34.33.08.46-.42-.22-.42.22.08-.46-.34-.33.47-.07zM7 8.2l.21.43.47.06-.34.33.08.47L7 9.27l-.42.22.08-.47-.34-.33.47-.06zm.31-1.15.45.14.38-.29v.48l.39.26-.45.15-.13.46-.28-.38-.47.01.27-.38z"
  }));
}, Hr = function(e) {
  var t = e.title, r = s(e, J9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 85.334V202.66h-46.069L256 233.38v22.617h-22.628L160 207.078v48.919H96v-48.919l-73.372 48.919H0V233.38l46.069-30.72H0v-64h46.069L0 107.951V85.334h22.628L96 134.241V85.334h64v48.907l73.372-48.907z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144 85.33h-32v69.333H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.329v15.083l57.377 38.251H80zm256 0v15.083l-57.377 38.251H176z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 107.951v30.712h-46.069z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.329v15.083l57.377 38.251H80zm256 0v15.083l-57.377 38.251H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 107.951v30.712h-46.069z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 255.997v-15.082l57.377-38.252H80zm256 0v-15.082l-57.377-38.252H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m384 259.706-46.129 46.129c8.645 16.675 26.051 28.074 46.129 28.074s37.484-11.4 46.129-28.074L384 259.706z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M332.058 178.084v81.624c.001 39.759 51.942 51.941 51.942 51.941s51.941-12.182 51.942-51.942v-81.623H332.058z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M372.87 215.181h22.261v59.359H372.87z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#A2001D",
    cx: 384,
    cy: 215.181,
    r: 11.13
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M346.902 192.92h14.84v14.84h-14.84zm0 33.392h14.84v14.84h-14.84zm0 33.391h14.84v14.84h-14.84zm59.359-66.783h14.84v14.84h-14.84zm0 33.392h14.84v14.84h-14.84zm0 33.391h14.84v14.84h-14.84z",
    fill: "#FFDA44"
  }));
}, br = function(e) {
  var t = e.title, r = s(e, X9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h512v341.3H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1583C4",
    d: "m397.7 166.3-51 97.7c-1.1 2-.3 4.5 1.8 5.6 2 1.1 4.5.3 5.6-1.8l51-97.7c1-2.1.1-4.6-2-5.5-2-.9-4.3-.2-5.4 1.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1583C4",
    d: "m404.9 188-57.8 75.4c-1.3 1.9-.8 4.5 1.1 5.8 1.7 1.2 4.1.9 5.5-.7l57.8-75.4c1.4-1.8 1.1-4.4-.8-5.8-1.8-1.5-4.4-1.1-5.8.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1583C4",
    d: "m379 181.3-32.5 83.1c-.8 2.1.2 4.6 2.4 5.4 2.1.8 4.6-.2 5.4-2.4l32.5-83.1c.7-2.2-.4-4.5-2.6-5.3-2.1-.6-4.3.4-5.2 2.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#409347",
    d: "M122.1 171.9c.4 1.7 1.2 4.7 2.2 8.5 1.7 6.4 3.6 12.8 5.6 18.7 2.3 6.9 14.7 31.4 20.2 39.1 6.9 9.7 14.1 19.3 21.5 28.6 1.6 1.9 4.5 2.1 6.4.5 1.8-1.6 2.1-4.3.7-6.2-7.3-9.2-14.4-18.6-21.2-28.2-4.2-5.8-17.2-31.1-19-36.7-2.9-8.7-5.4-17.6-7.6-26.5-.5-2.4-2.9-4-5.3-3.5s-4 2.9-3.5 5.3c-.1.2 0 .3 0 .4z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFD836",
    stroke: "#231F20",
    strokeMiterlimit: 10
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M297.1 114.9S279.5 42.8 261 42.8c-6.9 0-11.9-.6-15.4 6.4-.9 1.7-20.7-1.6-19.1 20.8.5 6.9 1.1-9.8 14.9-3.4 6.3 3-16.4 48.2-16.4 48.2h72.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m466.1 48.4-90.9 22c-75.3 18.3-42.1 44.4-42.1 44.4l-72.1 12-72.1-12s33.2-26.1-42.1-44.4l-90.9-22C43.1 45.3 38.1 51.8 45.3 63c0 0 106.6 104 126.8 112 20.2 8.1 40.8 0 40.8 0s-14.9 8.7-24 24c-9.2 15.3-4.6 34.7-38.9 40.2-5.5 6.6-5 14 2.9 19.9 7.9 5.8 72.1-48.1 72.1-48.1s-24 24.4-24 36.1c0 5.1 44.1 53.8 60.1 53.8s60.1-48.7 60.1-53.8c0-11.7-24-36.1-24-36.1s64.2 53.9 72.1 48.1 11.4-19.3 2.8-19.9c-28-1.8-29.7-24.9-38.9-40.2-9.2-15.3-24-24-24-24s20.6 8.1 40.8 0S476.7 63 476.7 63c7.2-11.2 2.3-17.7-10.6-14.6z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    stroke: "#231F20",
    strokeMiterlimit: 10,
    d: "M201.3 111.8v80.3c0 45.7 59.7 59.7 59.7 59.7s59.7-14 59.7-59.7v-80.3H201.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M225.2 137.7V235c8.2 6 17 10.2 23.9 12.9V137.7h-23.9zm71.6 0V235c-8.2 6-17 10.2-23.9 12.9V137.7h23.9z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M201.3 111.8h119.4v37.9H201.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1583C4",
    d: "m60.1 210.5-21.9-58.1H15.7l31.8 80.8h25.2l31.5-80.8H81.7zm391.4-58.6h18.9v81.7h-18.9z"
  }));
}, Cr = function(e) {
  var t = e.title, r = s(e, Q9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M196.641 85.337H0v341.326h512V85.337z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m256 157.279 22.663 69.747H352l-59.332 43.106 22.664 69.749L256 296.774l-59.332 43.107 22.664-69.749L160 227.026h73.337z"
  }));
}, _r = function(e) {
  var t = e.title, r = s(e, q9);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M512 256v170.663H0L215.185 256z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M512 85.337V256H215.185L0 85.337z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M221.001 239.304 26.868 85.337H8.956l208.168 165.098H512v-11.131zM8.956 426.663h17.912l194.133-153.967H512v-11.131H217.124zM0 92.44v14.206L188.317 256 0 405.354v14.205L206.229 256z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFDA44"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M8.956 85.337H0v7.103L206.229 256 0 419.559v7.104h8.956l208.168-165.098H512v-11.13H217.124z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M63.718 292.382v-14.295c14.265 0 25.87-11.606 25.87-25.869 0-10.092-8.211-18.303-18.304-18.303-6.875 0-12.469 5.593-12.469 12.469 0 4.397 3.577 7.974 7.974 7.974a4.514 4.514 0 0 0 4.508-4.508h14.295c0 10.368-8.435 18.804-18.802 18.804-12.279-.002-22.269-9.993-22.269-22.271 0-14.758 12.006-26.764 26.764-26.764 17.975 0 32.599 14.623 32.599 32.599 0 22.145-18.018 40.164-40.166 40.164z"
  })));
}, Nr = function(e) {
  var t = e.title, r = s(e, ec);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 150 100"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#ED2939",
    d: "M0 0h150v100H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#002395",
    d: "M0 0h20v44.33H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M20 0h20v44.33H20z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "none",
    stroke: "#FFF",
    strokeWidth: 3,
    d: "M0 44.33h62.75V0"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M108.08 43.29 87.96 23.17h40.25l-20.13 20.12zm-6.7 6.71L81.25 29.88v40.25L101.38 50zm6.7 6.71L87.96 76.83h40.25l-20.13-20.12zm6.71-6.71 20.13-20.13v40.25L114.79 50z"
  }));
}, Ar = function(e) {
  var t = e.title, r = s(e, tc);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.331h256v170.663H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m165.483 181.79 2.764 8.504h8.939l-7.232 5.254 2.763 8.503-7.234-5.255-7.233 5.255 2.763-8.503-7.233-5.254h8.94zm-44.904-66.783 4.606 14.173h14.9l-12.055 8.757 4.605 14.171-12.056-8.758-12.054 8.758 4.605-14.171-12.056-8.757h14.901zm44.522 14.841 4.606 14.172h14.9l-12.055 8.757 4.604 14.173-12.055-8.76-12.054 8.76 4.604-14.173-12.055-8.757h14.9zm-35.192 59.363 4.606 14.172h14.9l-12.055 8.758 4.604 14.171-12.055-8.759-12.054 8.759 4.604-14.171-12.055-8.758h14.9zm-39.01-37.103 4.605 14.173h14.9l-12.055 8.757 4.604 14.173-12.054-8.76-12.055 8.76 4.604-14.173-12.055-8.757h14.9z",
    fill: "#FFF"
  }));
}, Dr = function(e) {
  var t = e.title, r = s(e, ac);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.33"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h512v341.34H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m220.72 42.63 7.95 16.11 17.77 2.58-12.86 12.54 3.04 17.7-15.9-8.36-15.9 8.36 3.03-17.7-12.86-12.54 17.78-2.58zm70.56-.06 7.95 16.1 17.78 2.59-12.86 12.53 3.03 17.71-15.9-8.36-15.9 8.36 3.04-17.71-12.86-12.53 17.77-2.59zm62.08 11.36 7.95 16.11 17.77 2.58-12.86 12.54 3.04 17.7-15.9-8.35-15.9 8.35 3.04-17.7-12.87-12.54 17.78-2.58zm63.01 18.3 7.95 16.11 17.77 2.59-12.86 12.53 3.04 17.71-15.9-8.36-15.9 8.36 3.03-17.71-12.86-12.53 17.78-2.59zm-257.73-18.3 7.95 16.11 17.78 2.58-12.87 12.54 3.04 17.7-15.9-8.35-15.9 8.35 3.04-17.7-12.86-12.54 17.77-2.58zm-63.01 18.3 7.95 16.11 17.78 2.59-12.86 12.53 3.03 17.71-15.9-8.36-15.9 8.36 3.04-17.71-12.86-12.53 17.77-2.59z",
    fill: "#FFF"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m217.53 259.33-27.22-13.61-27.22-54.43h27.22l27.22-27.22 13.61-27.22 27.22-13.61 13.61 13.61 27.22 13.61v13.61l13.61 13.61 40.83 27.22L340 245.73l-40.83 40.83-13.61-27.22-40.83 27.22v27.22l-13.61-13.61-13.59-40.84z"
  }));
}, Pr = function(e) {
  var t = e.title, r = s(e, nc);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 312.888h512v113.775H0z"
  }));
}, Sr = function(e) {
  var t = e.title, r = s(e, rc);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 90 60"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h90v60H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    stroke: "#7f7f7f",
    strokeWidth: 0.25,
    fill: "#ABABAB",
    d: "M75.6 39.6c-1.1.7 0 1.8-.6 1.9-.6.1-1.5-1.4-.2-2.5 1.6-1.5 5.8 0 5.9 4.3 0 2.2-.9 6.8-7.2 6.8-7.6 0-11.4-5.7-11.4-11.4 0-4.8 3.7-13.5 6.5-14.6 3.1-1.2 6.7-3.5 6.8-5 0-.5-1.4-.1-3.3.9-3.1 1.7-6.6 2.5-6.6 1.4s2.9-3.1 4-4.6c1.2-1.6.9-5.5 3-5.5 7.6 0 9.9 7.7 7 11.7-1.9 2.6 4.3 1 4.3 1s0 5.3-3.2 7.3c-3 1.8-4.8 3.9-4.8 3.9s.2-4.6-.5-3.9c-.6.7-11.1 4.5-10.3 12 .3 3 4.5 5.4 8.5 5.2s5.7-2.4 5.8-4.9c.1-3.9-3-4.4-3.7-4zm-64.9 4c.1 2.5 1.8 4.7 5.8 4.9s8.2-2.2 8.5-5.2c.8-7.5-9.7-11.3-10.3-12-.7-.7-.5 3.9-.5 3.9s-1.8-2.1-4.8-3.9c-3.2-2-3.2-7.3-3.2-7.3s6.2 1.6 4.3-1c-2.9-4-.6-11.7 7-11.7 2.1 0 1.8 3.9 3 5.5 1.1 1.5 4 3.5 4 4.6s-3.5.3-6.6-1.4c-1.9-1-3.3-1.4-3.3-.9.1 1.5 3.7 3.8 6.8 5 2.8 1.1 6.5 9.8 6.5 14.6 0 5.7-3.8 11.4-11.4 11.4-6.3 0-7.2-4.6-7.2-6.8.1-4.3 4.3-5.8 5.9-4.3 1.2 1.1.4 2.7-.2 2.5-.6-.1.6-1.2-.6-1.9-.6-.4-3.7.1-3.7 4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#DE393A",
    d: "M31 28.8v14c0 1.9 2.1 1.6 2.1 1.6h9.3c1.2 0 2.6 2.3 2.6 2.3s1.4-2.3 2.5-2.3h9.6s2 .2 2-1.8V28.7H31z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#3951A3",
    d: "M31 13.1h28v15.7H31z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M50.1 16.5c-.4 2.4-2.5 4.2-5.1 4.2-2.5 0-4.6-1.8-5.1-4.2-.5.9-.8 1.9-.8 3 0 3.3 2.6 5.9 5.9 5.9 3.3 0 5.9-2.6 5.9-5.9 0-1.1-.3-2.1-.8-3z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FEE05F",
    cx: 39.1,
    cy: 36.5,
    r: 3
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FEE05F",
    cx: 50.9,
    cy: 36.5,
    r: 3
  }));
}, Tr = function(e) {
  var t = e.title, r = s(e, lc);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M114.024 256.001 0 141.926v228.17z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffb915",
    d: "M161.192 256 0 94.7v47.226l114.024 114.075L0 370.096v47.138z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#007847",
    d: "M509.833 289.391c.058-.44.804-.878 2.167-1.318v-65.464H222.602L85.33 85.337H0V94.7L161.192 256 0 417.234v9.429h85.33l137.272-137.272h287.231z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#000c8a",
    d: "M503.181 322.783H236.433l-103.881 103.88H512v-103.88z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#e1392d",
    d: "M503.181 189.217H512V85.337H132.552l103.881 103.88z"
  }));
}, Br = function(e) {
  var t = e.title, r = s(e, ic);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M490.668 195.476h-48c0-8.836-7.164-16-16-16s-16 7.164-16 16h-48c0 8.836 7.697 16 16.533 16h-.533c0 8.836 7.162 16 16 16 0 8.836 7.162 16 16 16h32c8.836 0 16-7.164 16-16 8.836 0 16-7.164 16-16h-.533c8.837 0 16.533-7.164 16.533-16z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M341.337 255.994h56.888v170.663h-56.888z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M455.112 255.994H512v170.663h-56.888z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M398.225 255.994h56.888v170.663h-56.888z"
  }));
}, Lr = function(e) {
  var t = e.title, r = s(e, dc);
  return /* @__PURE__ */ a.createElement("svg", c({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, r), t && /* @__PURE__ */ a.createElement("title", null, t), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 134.196h512v48.868H0zm0 195.472h512v48.868H0z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#057f44",
    d: "M0 85.333h512v48.868H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 183.069h512v48.868H0zm0 97.737h512v48.868H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#057f44",
    d: "M0 378.542h512v48.128H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M276.992 255.996 106.329 426.659H0V85.333h106.329z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256 255.996 85.334 426.662h20.987l170.667-170.666L106.321 85.33H85.334z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "m102.465 202.57 13.259 40.812h42.917l-34.718 25.226 13.26 40.814-34.718-25.224-34.72 25.224 13.262-40.814-34.718-25.226h42.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m138.94 259.335-34.559-12.243s-2.553-23.955-2.708-24.766c-1.173-6.18-6.603-10.851-13.123-10.851-7.376 0-13.357 5.98-13.357 13.357 0 1.223.178 2.402.486 3.528l-9.689 9.755h17.229c0 17.882-13.344 17.882-13.344 35.691l7.402 17.809h44.522l7.422-17.809h-.004a17.782 17.782 0 0 0 1.381-5.231c6.397-2.589 8.342-9.24 8.342-9.24z"
  }));
};
const sc = {
  AC: q2,
  AD: e3,
  AE: t3,
  AF: a3,
  AG: n3,
  AI: r3,
  AL: l3,
  AM: i3,
  AO: d3,
  AQ: c3,
  AR: s3,
  AS: o3,
  AT: h3,
  AU: u3,
  AW: m3,
  AX: f3,
  AZ: v3,
  BA: p3,
  BB: g3,
  BD: $3,
  BE: E3,
  BF: w3,
  BG: z3,
  BH: y3,
  BI: x3,
  BJ: M3,
  BL: F3,
  BM: H3,
  BN: b3,
  BO: C3,
  BQ: _3,
  BR: N3,
  BS: A3,
  BT: D3,
  BV: P3,
  BW: S3,
  BY: T3,
  BZ: B3,
  CA: L3,
  CC: I3,
  CD: O3,
  CF: R3,
  CG: k3,
  CH: V3,
  CI: G3,
  CK: j3,
  CL: U3,
  CM: Z3,
  CN: W3,
  CO: K3,
  CR: Y3,
  CU: J3,
  CV: X3,
  CW: Q3,
  CX: q3,
  CY: ea,
  CZ: ta,
  DE: aa,
  DJ: na,
  DK: ra,
  DM: la,
  DO: ia,
  DZ: da,
  EC: ca,
  EE: sa,
  EG: oa,
  EH: ha,
  ER: ua,
  ES: ma,
  ET: fa,
  EU: va,
  FI: pa,
  FJ: ga,
  FK: $a,
  FM: Ea,
  FO: wa,
  FR: za,
  GA: ya,
  GB: xa,
  GD: Ma,
  GE: Fa,
  GF: Ha,
  GG: ba,
  GH: Ca,
  GI: _a,
  GL: Na,
  GM: Aa,
  GN: Da,
  GP: Pa,
  GQ: Sa,
  GR: Ta,
  GS: Ba,
  GT: La,
  GU: Ia,
  GW: Oa,
  GY: Ra,
  HK: ka,
  HM: Va,
  HN: Ga,
  HR: ja,
  HT: Ua,
  HU: Za,
  IC: Wa,
  ID: Ka,
  IE: Ya,
  IL: Ja,
  IM: Xa,
  IN: Qa,
  IO: qa,
  IQ: e0,
  IR: t0,
  IS: a0,
  IT: n0,
  JE: r0,
  JM: l0,
  JO: i0,
  JP: d0,
  KE: c0,
  KG: s0,
  KH: o0,
  KI: h0,
  KM: u0,
  KN: m0,
  KP: f0,
  KR: v0,
  KW: p0,
  KY: g0,
  KZ: $0,
  LA: E0,
  LB: w0,
  LC: z0,
  LI: y0,
  LK: x0,
  LR: M0,
  LS: F0,
  LT: H0,
  LU: b0,
  LV: C0,
  LY: _0,
  MA: N0,
  MC: A0,
  MD: D0,
  ME: P0,
  MF: S0,
  MG: T0,
  MH: B0,
  MK: L0,
  ML: I0,
  MM: O0,
  MN: R0,
  MO: k0,
  MP: V0,
  MQ: G0,
  MR: j0,
  MS: U0,
  MT: Z0,
  MU: W0,
  MV: K0,
  MW: Y0,
  MX: J0,
  MY: X0,
  MZ: Q0,
  NA: q0,
  NC: en,
  NE: tn,
  NF: an,
  NG: nn,
  NI: rn,
  NL: ln,
  NO: dn,
  NP: cn,
  NR: sn,
  NU: on,
  NZ: hn,
  OM: un,
  PA: mn,
  PE: fn,
  PF: vn,
  PG: pn,
  PH: gn,
  PK: $n,
  PL: En,
  PM: wn,
  PN: zn,
  PR: yn,
  PS: xn,
  PT: Mn,
  PW: Fn,
  PY: Hn,
  QA: bn,
  RE: Cn,
  RO: _n,
  RS: Nn,
  RU: An,
  RW: Dn,
  SA: Pn,
  SB: Sn,
  SC: Tn,
  SD: Bn,
  SE: Ln,
  SG: In,
  SH: On,
  SI: Rn,
  SJ: kn,
  SK: Vn,
  SL: Gn,
  SM: jn,
  SN: Un,
  SO: Zn,
  SR: Wn,
  SS: Kn,
  ST: Yn,
  SV: Jn,
  SX: Xn,
  SY: Qn,
  SZ: qn,
  TA: er,
  TC: tr,
  TD: ar,
  TF: nr,
  TG: rr,
  TH: lr,
  TJ: ir,
  TK: dr,
  TL: cr,
  TM: sr,
  TN: or,
  TO: hr,
  TR: ur,
  TT: mr,
  TV: fr,
  TW: vr,
  TZ: pr,
  UA: gr,
  UG: $r,
  UM: Er,
  US: wr,
  UY: zr,
  UZ: yr,
  VA: xr,
  VC: Mr,
  VE: Fr,
  VG: Hr,
  VI: br,
  VN: Cr,
  VU: _r,
  WF: Nr,
  WS: Ar,
  XK: Dr,
  YE: Pr,
  YT: Sr,
  ZA: Tr,
  ZM: Br,
  ZW: Lr
}, oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AC: q2,
  AD: e3,
  AE: t3,
  AF: a3,
  AG: n3,
  AI: r3,
  AL: l3,
  AM: i3,
  AO: d3,
  AQ: c3,
  AR: s3,
  AS: o3,
  AT: h3,
  AU: u3,
  AW: m3,
  AX: f3,
  AZ: v3,
  BA: p3,
  BB: g3,
  BD: $3,
  BE: E3,
  BF: w3,
  BG: z3,
  BH: y3,
  BI: x3,
  BJ: M3,
  BL: F3,
  BM: H3,
  BN: b3,
  BO: C3,
  BQ: _3,
  BR: N3,
  BS: A3,
  BT: D3,
  BV: P3,
  BW: S3,
  BY: T3,
  BZ: B3,
  CA: L3,
  CC: I3,
  CD: O3,
  CF: R3,
  CG: k3,
  CH: V3,
  CI: G3,
  CK: j3,
  CL: U3,
  CM: Z3,
  CN: W3,
  CO: K3,
  CR: Y3,
  CU: J3,
  CV: X3,
  CW: Q3,
  CX: q3,
  CY: ea,
  CZ: ta,
  DE: aa,
  DJ: na,
  DK: ra,
  DM: la,
  DO: ia,
  DZ: da,
  EC: ca,
  EE: sa,
  EG: oa,
  EH: ha,
  ER: ua,
  ES: ma,
  ET: fa,
  EU: va,
  FI: pa,
  FJ: ga,
  FK: $a,
  FM: Ea,
  FO: wa,
  FR: za,
  GA: ya,
  GB: xa,
  GD: Ma,
  GE: Fa,
  GF: Ha,
  GG: ba,
  GH: Ca,
  GI: _a,
  GL: Na,
  GM: Aa,
  GN: Da,
  GP: Pa,
  GQ: Sa,
  GR: Ta,
  GS: Ba,
  GT: La,
  GU: Ia,
  GW: Oa,
  GY: Ra,
  HK: ka,
  HM: Va,
  HN: Ga,
  HR: ja,
  HT: Ua,
  HU: Za,
  IC: Wa,
  ID: Ka,
  IE: Ya,
  IL: Ja,
  IM: Xa,
  IN: Qa,
  IO: qa,
  IQ: e0,
  IR: t0,
  IS: a0,
  IT: n0,
  JE: r0,
  JM: l0,
  JO: i0,
  JP: d0,
  KE: c0,
  KG: s0,
  KH: o0,
  KI: h0,
  KM: u0,
  KN: m0,
  KP: f0,
  KR: v0,
  KW: p0,
  KY: g0,
  KZ: $0,
  LA: E0,
  LB: w0,
  LC: z0,
  LI: y0,
  LK: x0,
  LR: M0,
  LS: F0,
  LT: H0,
  LU: b0,
  LV: C0,
  LY: _0,
  MA: N0,
  MC: A0,
  MD: D0,
  ME: P0,
  MF: S0,
  MG: T0,
  MH: B0,
  MK: L0,
  ML: I0,
  MM: O0,
  MN: R0,
  MO: k0,
  MP: V0,
  MQ: G0,
  MR: j0,
  MS: U0,
  MT: Z0,
  MU: W0,
  MV: K0,
  MW: Y0,
  MX: J0,
  MY: X0,
  MZ: Q0,
  NA: q0,
  NC: en,
  NE: tn,
  NF: an,
  NG: nn,
  NI: rn,
  NL: ln,
  NO: dn,
  NP: cn,
  NR: sn,
  NU: on,
  NZ: hn,
  OM: un,
  PA: mn,
  PE: fn,
  PF: vn,
  PG: pn,
  PH: gn,
  PK: $n,
  PL: En,
  PM: wn,
  PN: zn,
  PR: yn,
  PS: xn,
  PT: Mn,
  PW: Fn,
  PY: Hn,
  QA: bn,
  RE: Cn,
  RO: _n,
  RS: Nn,
  RU: An,
  RW: Dn,
  SA: Pn,
  SB: Sn,
  SC: Tn,
  SD: Bn,
  SE: Ln,
  SG: In,
  SH: On,
  SI: Rn,
  SJ: kn,
  SK: Vn,
  SL: Gn,
  SM: jn,
  SN: Un,
  SO: Zn,
  SR: Wn,
  SS: Kn,
  ST: Yn,
  SV: Jn,
  SX: Xn,
  SY: Qn,
  SZ: qn,
  TA: er,
  TC: tr,
  TD: ar,
  TF: nr,
  TG: rr,
  TH: lr,
  TJ: ir,
  TK: dr,
  TL: cr,
  TM: sr,
  TN: or,
  TO: hr,
  TR: ur,
  TT: mr,
  TV: fr,
  TW: vr,
  TZ: pr,
  UA: gr,
  UG: $r,
  UM: Er,
  US: wr,
  UY: zr,
  UZ: yr,
  VA: xr,
  VC: Mr,
  VE: Fr,
  VG: Hr,
  VI: br,
  VN: Cr,
  VU: _r,
  WF: Nr,
  WS: Ar,
  XK: Dr,
  YE: Pr,
  YT: Sr,
  ZA: Tr,
  ZM: Br,
  ZW: Lr,
  default: sc
}, Symbol.toStringTag, { value: "Module" }));
function hc(n) {
  const { country: e } = Q2(), t = oc[e];
  return /* @__PURE__ */ j.jsx(t, { ...n });
}
function Ir(n) {
  const { children: e, country: t } = n;
  return /* @__PURE__ */ j.jsx(y6, { country: t, children: e });
}
Ir.Img = x6;
Ir.Svg = hc;
const Or = a.createContext({}), qt = () => {
  const n = a.useContext(Or);
  if (!n)
    throw new Error(
      "usePhoneInputCountrySelect must be used within a PhoneInputCountrySelectProvider"
    );
  return n;
};
function uc({
  children: n
}) {
  const [e, t] = fe(!1), [r, l] = fe(null), i = Yt(
    () => ({
      isDialogOpen: e,
      setIsDialogOpen: t,
      setTriggerRef: l,
      triggerRef: r
    }),
    [e, r]
  );
  return /* @__PURE__ */ j.jsx(Or.Provider, { value: i, children: n });
}
const Rr = a.createContext({});
function zt() {
  const n = a.useContext(Rr);
  if (!n)
    throw new Error(
      "PhoneInput compound components cannot be rendered outside the PhoneInput component"
    );
  return n;
}
function mc({
  children: n
}) {
  const [e, t] = fe(null), [r, l] = fe(), i = Yt(
    () => ({
      dialogPosition: r,
      phoneInputRef: e,
      setDialogPosition: l,
      setPhoneInputRef: t
    }),
    [e, r]
  );
  return /* @__PURE__ */ j.jsx(Rr.Provider, { value: i, children: n });
}
function fc(n) {
  zt();
  const { children: e } = n;
  return /* @__PURE__ */ j.jsx(uc, { children: e });
}
function kr(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number")
    r += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var l = n.length;
      for (e = 0; e < l; e++)
        n[e] && (t = kr(n[e])) && (r && (r += " "), r += t);
    } else
      for (t in n)
        n[t] && (r && (r += " "), r += t);
  return r;
}
function We() {
  for (var n, e, t = 0, r = "", l = arguments.length; t < l; t++)
    (n = arguments[t]) && (e = kr(n)) && (r && (r += " "), r += e);
  return r;
}
const vc = (n, e) => !e.some((t) => {
  var r;
  return (r = t == null ? void 0 : t.current) == null ? void 0 : r.contains(n.target);
});
function pc(n, e) {
  w2(() => {
    const t = (r) => {
      vc(r, n) && e(r);
    };
    return document.addEventListener("mousedown", t), () => {
      document.removeEventListener("mousedown", t);
    };
  }, [n, e]);
}
const gc = "_phoneInput_8ujgh_1", $c = "_phoneInputNumberInput_8ujgh_4", Ec = "_countrySelectTrigger_8ujgh_11", wc = "_countrySelectDialog_8ujgh_15", zc = "_countrySelectDialogOpen_8ujgh_21", He = {
  phoneInput: gc,
  phoneInputNumberInput: $c,
  countrySelectTrigger: Ec,
  countrySelectDialog: wc,
  countrySelectDialogOpen: zc
};
function yc(n) {
  const e = zl(null), { dialogPosition: t } = zt(), { isDialogOpen: r, setIsDialogOpen: l, triggerRef: i } = qt();
  pc([e, i], () => {
    r && l(!1);
  });
  const { children: d, className: o } = n;
  return t ? /* @__PURE__ */ j.jsx(
    "div",
    {
      ...n,
      className: We(
        He.countrySelectDialog,
        o,
        r && He.countrySelectDialogOpen
      ),
      ref: e,
      style: { top: t.top },
      children: d
    }
  ) : null;
}
function xc(n) {
  const { children: e, className: t, onClick: r, onKeyDown: l, value: i } = n, { setIsDialogOpen: d } = qt(), o = (m) => {
    r == null || r(m), d(!1);
  }, u = (m) => {
    m.key === "Enter" && (l == null || l(m), d(!1));
  };
  return /* @__PURE__ */ j.jsx(
    "li",
    {
      ...n,
      "aria-selected": "false",
      className: We(He.countrySelectItem, t),
      onClick: o,
      onKeyDown: u,
      role: "option",
      value: i,
      children: e
    }
  );
}
function Mc(n) {
  zt();
  const { className: e } = n;
  return /* @__PURE__ */ j.jsx(
    "input",
    {
      ...n,
      className: We(He.phoneInputNumberInput, e)
    }
  );
}
function Fc(n) {
  const { isDialogOpen: e, setIsDialogOpen: t, setTriggerRef: r, triggerRef: l } = qt(), i = () => {
    t(!e);
  }, { children: d, className: o } = n;
  return /* @__PURE__ */ j.jsx(
    "button",
    {
      ...n,
      className: We(He.countrySelectTrigger, o),
      "data-open": e,
      onClick: i,
      ref: (u) => {
        u && !(l != null && l.current) && r({
          current: u
        });
      },
      type: "button",
      children: d
    }
  );
}
function Hc(n) {
  const { phoneInputRef: e, setDialogPosition: t, setPhoneInputRef: r } = zt(), { className: l } = n;
  return w2(() => {
    if (e != null && e.current) {
      const d = e.current.getBoundingClientRect().height;
      t({ top: d });
    }
  }, [e]), /* @__PURE__ */ j.jsx(
    "div",
    {
      ...n,
      className: We(He.phoneInput, l),
      ref: (i) => {
        i && !(e != null && e.current) && r({
          current: i
        });
      }
    }
  );
}
function Ke(n) {
  const { children: e } = n;
  return /* @__PURE__ */ j.jsx(mc, { children: /* @__PURE__ */ j.jsx(Hc, { ...n, children: e }) });
}
Ke.NumberInput = Mc;
Ke.CountrySelect = fc;
Ke.Trigger = Fc;
Ke.Dialog = yc;
Ke.Item = xc;
export {
  Ir as CountryFlag,
  Ke as PhoneInput,
  E6 as formatPhoneNumber,
  $6 as phoneValidationSchema,
  Cc as usePhoneInput
};
