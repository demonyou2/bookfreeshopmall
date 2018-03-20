<template>
  <div>
    <x-header>This is the page title.</x-header>
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, XHeader} from 'vux'

export default {
  components: {
    Group,
    Cell,
    XHeader
  }
}
</script>