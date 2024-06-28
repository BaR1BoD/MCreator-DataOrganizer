try {
    ${input$list} = ${input$list}.stream().sorted().toList();
} catch (Exception e) {
    e.printStackTrace();
}