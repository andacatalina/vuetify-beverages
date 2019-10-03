<template>
	<div id="app">
		<v-data-table
			:headers="headers"
			:items="beers"
			:sort-by="['name']"
			:sort-desc="[true]"
			multi-sort
			class="elevation-1 mx-auto mt-5"
			width="750"
		></v-data-table>
	</div>
</template>

<script>

export default {
  name: 'App',
  data () {
	return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Tagline', value: 'tagline' },
        { text: 'First brewed', value: 'first_brewed' },
        { text: 'Description', value: 'description' },
        { text: 'Image URL', value: 'image_url' },
        { text: 'Abv', value: 'abv' },
        { text: 'Ibu', value: 'ibu' },
        { text: 'Target fg', value: 'target_fg' },
        { text: 'Target og', value: 'target_og' },
        { text: 'Ebc', value: 'ebc' },
        { text: 'Srm', value: 'srm' },
        { text: 'Ph', value: 'ph' },
        { text: 'Attenuation level', value: 'attenuation_level' },
      ],
      beers: []
    }
  },
  mounted () {
    this.$beer = this.$resource("beers?malt=Extra_Pale", {}, {}, {})
   
    this.$beer.query().then(
      (response) => {
        response.json().then((data) => {
          this.beers = data
        })
      },
      (response) => { console.log("This is a failure", response) }
    ) 
  },
};

</script>
