<template>
    <v-card>
        <v-list class="rtl"  >
            <v-list-item class="pa-0 ma-0 cf text-center f20 white--text" style="background-color:#004e8b">
                <v-list-item-title >
                    <span v-if="!$store.state.en">الاقسام</span>
                    <span v-if="$store.state.en">Sections</span>
                </v-list-item-title>
            </v-list-item>
            <v-list-item v-for="(sec ,i ) in $store.state.site.sections.sections" :key="'section_item_side_'+i" :to="'/sections/'+sec.section_slug">
                <v-list-item-avatar>
                    <v-icon>mdi-cog</v-icon>
                </v-list-item-avatar>
                <v-list-item-title class="cf">
                    <span v-if="!$store.state.en">{{sec.section_title}}</span>
                    <span v-if="$store.state.en">{{sec.section_title_en}}</span>
                </v-list-item-title>

            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        name: "SideSections"
    }
</script>

<style scoped>

</style>