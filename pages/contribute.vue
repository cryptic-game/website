<template>
  <main class="team-page">
    <KNavigationBar title="Contribute"></KNavigationBar>
    <div class="content formatted">
      <h1>Contribute</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Arcu ac tortor dignissim convallis aenean. Ac felis donec et odio pellentesque diam. Dolor sed
        viverra ipsum nunc aliquet bibendum enim. Interdum velit laoreet id donec ultrices tincidunt. Lacus viverra
        vitae congue eu consequat ac. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.
        Nascetur ridiculus mus mauris vitae ultricies leo integer. At tempor commodo ullamcorper a. Orci ac auctor augue
        mauris augue. Lobortis mattis aliquam faucibus purus in massa tempor nec. Sit amet facilisis magna etiam tempor
        orci eu. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Lacus sed turpis tincidunt id. Est sit
        amet facilisis magna etiam tempor orci eu lobortis. Tristique magna sit amet purus.
      </p>

      <p>
        Pellentesque adipiscing commodo elit at imperdiet. Odio tempor orci dapibus ultrices in iaculis nunc sed augue.
        Pellentesque elit ullamcorper dignissim cras tincidunt. Sollicitudin ac orci phasellus egestas tellus rutrum
        tellus pellentesque. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Aenean et tortor at
        risus. Fermentum iaculis eu non diam. Pellentesque habitant morbi tristique senectus et netus et. Ac auctor
        augue mauris augue neque gravida. Sed enim ut sem viverra aliquet eget. Elementum eu facilisis sed odio morbi
        quis commodo.
      </p>

      <p>
        Aenean vel elit scelerisque mauris. Sapien et ligula ullamcorper malesuada. Semper auctor neque vitae tempus.
        Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Ut diam quam nulla porttitor massa id. Id
        leo in vitae turpis massa sed elementum tempus egestas. At in tellus integer feugiat scelerisque varius morbi
        enim nunc. Ut etiam sit amet nisl purus in. Scelerisque viverra mauris in aliquam sem. Cursus euismod quis
        viverra nibh. Quis auctor elit sed vulputate mi sit amet mauris. Neque aliquam vestibulum morbi blandit cursus
        risus at. Neque laoreet suspendisse interdum consectetur libero.
      </p>

      <p>
        Elementum integer enim neque volutpat ac tincidunt. Amet massa vitae tortor condimentum lacinia quis vel. Dolor
        sit amet consectetur adipiscing elit. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque.
        Auctor elit sed vulputate mi. Accumsan lacus vel facilisis volutpat est velit. Leo integer malesuada nunc vel
        risus commodo viverra maecenas accumsan. Elit sed vulputate mi sit amet. Vitae et leo duis ut. Adipiscing diam
        donec adipiscing tristique risus. Est ante in nibh mauris cursus mattis. Luctus venenatis lectus magna fringilla
        urna porttitor. Suscipit tellus mauris a diam maecenas sed enim. Scelerisque varius morbi enim nunc faucibus. Id
        interdum velit laoreet id donec. Mattis nunc sed blandit libero volutpat sed. Sagittis orci a scelerisque purus
        semper.
      </p>

      <p>
        Sem fringilla ut morbi tincidunt augue interdum. Tortor vitae purus faucibus ornare suspendisse sed nisi. Velit
        euismod in pellentesque massa placerat. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium
        vulputate sapien. Condimentum lacinia quis vel eros donec ac odio tempor. Nascetur ridiculus mus mauris vitae
        ultricies leo integer malesuada. Nisl vel pretium lectus quam id. Laoreet non curabitur gravida arcu ac tortor
        dignissim convallis aenean. Orci dapibus ultrices in iaculis nunc. Donec ultrices tincidunt arcu non sodales
        neque. In nibh mauris cursus mattis molestie a. Mauris rhoncus aenean vel elit. Volutpat commodo sed egestas
        egestas.
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  div.content {
    display: flex;
    flex-direction: column;

    div.group {
      display: flex;
      flex-direction: column;
    }
  }
</style>

<script>
  import KNavigationBar from "kiste/components/KNavigationBar";

  export default {
    name: "ContributePage",
    components: {KNavigationBar}
  };
</script>
