module.exports = function(grunt) {

  // Configuração do projeto
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          "dist/css/style.css": "src/less/style.less" // Caminhos atualizados
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/script.js', // Caminho atualizado
        dest: 'dist/js/script.min.js' // Caminho atualizado
      }
    }
  });

  // Carregar plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Definir tarefas padrão
  grunt.registerTask('default', ['less', 'uglify']);

};

