<script lang="ts">
  const asm = `
    MOV R1 [2]
    MOV R2 [5]
    ADD R1 R2
  `;
</script>

<code>
  {#each asm.split('\n') as line}
    {line}
  {/each}
</code>
