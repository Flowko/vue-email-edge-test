<template>
  <e-tailwind>
    <e-html>
      <e-head />
      <e-preview>{{ props.previewText || "Preview" }}</e-preview>
      <e-body class="mx-auto my-auto bg-white px-4 font-sans">
        <e-container
          class="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]"
        >
          <e-section class="mt-[32px]">
            <e-img
              src="/png/ldseating.png"
              height="70"
              alt="LD Seating logo"
              class="mx-auto my-0 mb-5 w-auto"
            />
          </e-section>
          <e-heading
            class="mx-0 my-[30px] p-0 text-center text-[24px] font-bold text-black"
          >
            {{ props.heading || "Heading" }}
          </e-heading>
          <slot />
          <e-section>
            <e-text class="mb-1 text-[14px]">Best wishes</e-text>
            <e-text class="mt-1 text-[14px]">LD Seating</e-text>
          </e-section>
          <e-hr
            class="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]"
          />
          <e-section>
            <e-text class="text-[12px] leading-[24px] text-[#666666]">
              ©2023 LD Seating s.r.o.
            </e-text>
            <e-text class="text-[12px] leading-[24px] text-[#666666]">
              Dřevařská 2461/19a,
              <br />
              680 01 Boskovice,
              <br />
              Czech Republic
            </e-text>
          </e-section>
        </e-container>
      </e-body>
    </e-html>
  </e-tailwind>
</template>

<script lang="ts" setup>
const props = defineProps<{
  heading: string
  previewText: string
}>()
</script>
