{ pkgs, ... }:

{
  packages = [
    pkgs.eslint
    pkgs.prettier
    pkgs.python3Packages.grip
    # pkgs.svelte-check
    # pkgs.tailwindcss
  ];

  languages = {
    javascript = {
      enable = true;
      bun = {
        enable = true;
        install = {
          enable = true;
        };
      };
    };
  };
}
