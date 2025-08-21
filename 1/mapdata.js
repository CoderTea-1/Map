var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "500", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    MA01: {
      name: "Tangier-Tetouan-Al Hoceima"
    },
    MA02: {
      name: "Oriental"
    },
    MA03: {
      name: "Fez-Meknes"
    },
    MA04: {
      name: "Rabat-Salé-Kenitra"
    },
    MA05: {
      name: "Béni Mellal-Khénifra"
    },
    MA06: {
      name: "Casablanca-Settat"
    },
    MA07: {
      name: "Marrakech-Safi"
    },
    MA08: {
      name: "Drâa-Tafilalet"
    },
    MA09: {
      name: "Souss-Massa"
    },
    MA10: {
      name: "Guelmim-Oued Noun"
    },
    MA11: {
      name: "Laâyoune-Sakia El Hamra"
    },
    MA12: {
      name: "Dakhla-Oued Ed-Dahab"
    }
  },
  locations: {
    "0": {
      name: "Rabat",
      lat: "34.013784",
      lng: "-6.844268"
    },
    "1": {
      lat: "35.168430",
      lng: "-5.275784",
      name: "Chef"
    }
  },
  labels: {
    MA01: {
      name: "Tangier-Tetouan-Al Hoceima",
      parent_id: "MA01"
    },
    MA02: {
      name: "Oriental",
      parent_id: "MA02"
    },
    MA03: {
      name: "Fez-Meknes",
      parent_id: "MA03"
    },
    MA04: {
      name: "Rabat-Salé-Kenitra",
      parent_id: "MA04"
    },
    MA05: {
      name: "Béni Mellal-Khénifra",
      parent_id: "MA05"
    },
    MA06: {
      name: "Casablanca-Settat",
      parent_id: "MA06"
    },
    MA07: {
      name: "Marrakech-Safi",
      parent_id: "MA07"
    },
    MA08: {
      name: "Drâa-Tafilalet",
      parent_id: "MA08"
    },
    MA09: {
      name: "Souss-Massa",
      parent_id: "MA09"
    },
    MA10: {
      name: "Guelmim-Oued Noun",
      parent_id: "MA10"
    },
    MA11: {
      name: "Laâyoune-Sakia El Hamra",
      parent_id: "MA11"
    },
    MA12: {
      name: "Dakhla-Oued Ed-Dahab",
      parent_id: "MA12"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};