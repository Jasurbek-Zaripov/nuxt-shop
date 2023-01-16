<script lang="ts" setup>
import { LENGS, MetaTagsProps } from '~~/types';
interface IMetaTagsProps extends MetaTagsProps { }

const prop = useForMetaProps();
const { referer, host } = useRequestHeaders();
const route = useRoute();
const hostInfo: { host?: string; hostName?: string; absoluteUrl?: string; } = {};
if (referer) {
  hostInfo.host = referer;
  hostInfo.hostName = host;
  hostInfo.absoluteUrl = [hostInfo.host, route.fullPath].join('').replace(/\/\//g, '\/');
}
const infos: Partial<IMetaTagsProps> = {};
if (prop.value) {
  infos.title = prop.value.title?.slice(0, LENGS.TITLE);
  infos.description = prop.value.description?.slice(0, LENGS.DESCRIPTION);
  infos.keywords = prop.value.keywords?.slice(0, LENGS.KEYWORDS)?.join(', ') as any;
  infos.img = prop.value.img;
}
</script>

<template>
  <div>
    <Html lang="en" />
    <Title>{{ infos.title }}</Title>
    <Meta name="author" content="Zaripov Jasurbek" />
    <Meta name="robots" content="index,follow" />
    <Meta http-equiv="content-type" content="text/html" />
    <Meta name="keywords" :content="infos.keywords + ''" />
    <Meta name="description" :content="infos.description" />
    <Meta name="image" :content="infos.img" />
    <!-- Open Graph -->
    <Meta name="og:site_name" :content="hostInfo.hostName" />
    <Meta name="og:title" :content="infos.title" />
    <Meta name="og:type" content="website" />
    <Meta name="og:description" :content="infos.description" />
    <Meta name="og:image" :content="infos.img" />
    <Meta name="og:url" :content="hostInfo.absoluteUrl" />
  </div>
</template>
